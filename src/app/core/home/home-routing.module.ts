import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from 'src/app/features/edit/edit.component';
import { ResultsComponent } from 'src/app/features/results/results.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		children: [
			{
				path: 'results',
				component: ResultsComponent
			},
			{
				path: 'results/:id',
				component: EditComponent
			},
			{
				path: '',
				redirectTo: 'results',
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
