import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../components/header/header.component';
import { ResultsComponent } from './results/results.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EditComponent } from './edit/edit.component';

@NgModule({
	declarations: [HomeComponent, ResultsComponent, EditComponent, HeaderComponent],
	imports: [SharedModule, HomeRoutingModule]
})
export class HomeModule {}
