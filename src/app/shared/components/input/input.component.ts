import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
	selector: 'jd-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() label: string;
  
	@Input() type = 'text';
  
  @Input() mask: 'cpfCnpj';
  
  @Input() maxLength: number;
  
  @ViewChild('input') input: ElementRef;

	constructor(private renderer: Renderer2) {}

	onFocus(event: any) {
		let value: string = event.target.value;

		value = value.replace(/[^a-zA-Z0-9 ]/g, '');
		this.renderer.setProperty(this.input.nativeElement, 'value', value);
	}

	onBlur(event: any) {
		let regex: [RegExp, string];
		let value: string = event.target.value;
		const isCpf = this.mask === 'cpfCnpj' && value.length === 11;
		const isCnpj = this.mask === 'cpfCnpj' && value.length === 12;

		if (isCpf) {
			regex = [/^(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/, '$1.$2.$3-$4'];
		} else if (isCnpj) {
			regex = [/^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})/, '$1.$2.$3/$4'];
		} else {
			return;
		}

		value = value.replace(...regex);
		this.renderer.setProperty(this.input.nativeElement, 'value', value);
	}
}
