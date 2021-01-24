import { NgModule } from '@angular/core';
import { EditComponent } from './edit/edit.component';
import { ResultsComponent } from './results/results.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [ResultsComponent, EditComponent],
	imports: [SharedModule]
})
export class FeaturesModule {}
