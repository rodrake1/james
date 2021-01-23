import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../components/header/header.component';
import { ResultsComponent } from '../../results/containers/results.component';

@NgModule({
	declarations: [HomeComponent, ResultsComponent, HeaderComponent],
	imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}
