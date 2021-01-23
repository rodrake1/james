import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../components/header/header.component';
import { ResultsComponent } from '../../results/containers/results.component';
import { CardComponent } from '../../results/components/card/card.component';

@NgModule({
	declarations: [HomeComponent, ResultsComponent, HeaderComponent, CardComponent],
	imports: [CommonModule, HomeRoutingModule]
})
export class HomeModule {}
