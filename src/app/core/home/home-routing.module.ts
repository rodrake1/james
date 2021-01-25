import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditEstablishmentComponent } from 'src/app/features/edit-establishments/edit-establishment.component';
import { EstablishmentsComponent } from 'src/app/features/establishments/establishments.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{
				path: 'establishments',
				component: EstablishmentsComponent
			},
			{
				path: 'establishments/edit',
				component: EditEstablishmentComponent
			},
			{
				path: '',
				redirectTo: 'establishments',
				pathMatch: 'full'
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class HomeRoutingModule {}
