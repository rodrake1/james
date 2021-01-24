import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';

@NgModule({
	declarations: [CardComponent, InputComponent, SelectComponent],
	exports: [CommonModule, CardComponent, InputComponent, SelectComponent]
})
export class SharedModule {}
