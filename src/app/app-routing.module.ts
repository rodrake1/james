import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/containers/home.component';
import { EditComponent } from './features/home/containers/edit/edit.component';
import { ResultsComponent } from './features/home/containers/results/results.component';

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent,
		children: [
			{
				path: 'results',
				component: ResultsComponent
			},
			{
				path: 'results/edit/14131',
				component: EditComponent
			},
			{
				path: '',
				redirectTo: 'results',
				pathMatch: 'full'
			}
		]
	},
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
