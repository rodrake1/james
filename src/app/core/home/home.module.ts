import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeaturesModule } from 'src/app/features/features.module';

@NgModule({
	declarations: [HomeComponent, HeaderComponent],
	imports: [SharedModule, FeaturesModule, HomeRoutingModule]
})
export class HomeModule {}
