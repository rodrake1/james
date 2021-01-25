import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Establishment } from 'src/app/models/Establishment';

export const getEstablishments = createAction('[Establishments Page] Get Establishments');

export const getEstablishmentsSuccess = createAction(
	'[Establishments Page] Get Establishments Success',
	props<{ payload: Establishment[] }>()
);

export const getEstablishmentsFail = createAction(
	'[Establishments Page] Get Establishments Fail',
	props<{ payload: HttpErrorResponse }>()
);

export const saveEstablishment = createAction(
	'[Edit Establishment Page] Save Establishment',
	props<{ payload: Establishment }>()
);
