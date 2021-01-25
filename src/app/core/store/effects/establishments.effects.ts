import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { catchError, concatMap, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { Establishment } from 'src/app/models/Establishment';
import { EstablishmentsService } from 'src/app/services/establishments.service';
import * as EstablishmentsActions from '../actions/establishments.actions';
import { selectEstablishments } from '../reducers/establishments.reducers';

@Injectable()
export class EstablishmentsEffects {
	getEstablishments$ = createEffect(() =>
		this.actions$.pipe(
			ofType(EstablishmentsActions.getEstablishments),
			concatMap((action) =>
				of(action).pipe(withLatestFrom(this.store.select(selectEstablishments)))
			),
			switchMap(([, establishments]) => {
				const savedDataExists = establishments.length > 0;

				if (!savedDataExists) {
					return this.establishmentsService.getEstablishments().pipe(
						map((establishments) => {
							function addExtraProperties(establishment: Establishment) {
								const addressArray = establishment.address.split(',');
								const street = addressArray[0].trim();
								const city = addressArray[1].trim();

								return {
									...establishment,
									street,
									city,
									bank: null,
									accountType: null,
									cpfCnpj: null,
									branch: null,
									branchDigit: null,
									account: null,
									accountDigit: null,
									autoWithdraw: null
								};
							}

							const newEstablishments = establishments.map(addExtraProperties);

							return EstablishmentsActions.getEstablishmentsSuccess({
								payload: newEstablishments
							});
						}),
						catchError((error) =>
							of(EstablishmentsActions.getEstablishmentsFail({ payload: error }))
						)
					);
				}

				return EMPTY;
			})
		)
	);

	getEstablishmentsFail$ = createEffect(
		() =>
			this.actions$.pipe(
				ofType(EstablishmentsActions.getEstablishmentsFail),
				tap(({ payload: error }) => console.error('Error on get establishments: ', error))
			),
		{ dispatch: false }
	);

	constructor(
		private actions$: Actions,
		private store: Store,
		private establishmentsService: EstablishmentsService
	) {}
}
