import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';

const components = [CardComponent, InputComponent, SelectComponent, ButtonComponent];

@NgModule({
	declarations: components,
	exports: [CommonModule, ReactiveFormsModule, ...components]
})
export class SharedModule {}
