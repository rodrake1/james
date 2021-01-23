import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/containers/home.component';
import { ResultsComponent } from './features/results/containers/results.component';

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
