import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Establishment } from 'src/app/models/Establishment';

export const getEstablishments = createAction('[Results Page] Get Establishments');

export const getEstablishmentsSuccess = createAction(
	'[Results Page] Get Establishments Success',
	props<{ payload: Establishment[] }>()
);

export const getEstablishmentsFail = createAction(
	'[Results Page] Get Establishments Fail',
	props<{ payload: HttpErrorResponse }>()
);
