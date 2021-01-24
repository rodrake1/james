import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeaturesModule } from 'src/app/features/features.module';
import { StoreModule } from '@ngrx/store';
import { establishmentsFeatureKey } from '../store/reducers/establishments.reducers';
import { EstablishmentsEffects, establishmentsReducer } from '../store/index';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
	declarations: [HomeComponent, HeaderComponent],
	imports: [
		SharedModule,
		FeaturesModule,
		HomeRoutingModule,
		StoreModule.forFeature(establishmentsFeatureKey, establishmentsReducer),
		EffectsModule.forFeature([EstablishmentsEffects])
	],
})
export class HomeModule {}
