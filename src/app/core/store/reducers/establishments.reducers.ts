import { createReducer, on } from '@ngrx/store';
import { Establishment } from 'src/app/models/Establishment';
import * as EstablishmentsActions from '../actions/establishments.actions';

export const establishmentsFeatureKey = 'establishments';

const initialState: Establishment[] = [];

export const establishmentsReducer = createReducer(
	initialState,
	on(EstablishmentsActions.getEstablishmentsSuccess, (_, { payload: establishments }) => [
		...establishments
	])
);

export interface AppState {
  establishments: Establishment[]
}

export const selectEstablishments = (state: AppState) => state.establishments;
