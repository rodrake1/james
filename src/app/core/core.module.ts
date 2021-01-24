import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import { establishmentsFeatureKey } from './store';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
	return localStorageSync({ keys: [establishmentsFeatureKey], rehydrate: true })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		StoreModule.forRoot({}, { metaReducers }),
		EffectsModule.forRoot([]),
		StoreDevtoolsModule.instrument({})
	]
})
export class CoreModule {}
