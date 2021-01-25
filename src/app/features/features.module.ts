import { NgModule } from '@angular/core';
import { EditEstablishmentComponent } from './edit-establishments/edit-establishment.component';
import { EstablishmentsComponent } from './establishments/establishments.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
	declarations: [EstablishmentsComponent, EditEstablishmentComponent],
	imports: [SharedModule]
})
export class FeaturesModule {}
