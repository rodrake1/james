import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
	selector: 'jd-input',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss']
})
export class InputComponent implements AfterViewInit {
	@Input() label: string;

	@Input() type = 'text';

	@Input() mask: 'cpfCnpj';

	@Input() maxlength: number;

	@Input() value: string = null;

	@ViewChild('input') input: ElementRef;

	constructor(private renderer: Renderer2) {}

	ngAfterViewInit() {
		this.applyMask(this.value);
	}

	onBlur(event: any) {
		this.applyMask(event.target.value);
	}

	onFocus(event: any) {
		this.removeMask(event.target.value);
	}

	applyMask(value: string) {
		let regex: [RegExp, string];
		const isCpf = this.mask === 'cpfCnpj' && value?.length === 11;
		const isCnpj = this.mask === 'cpfCnpj' && value?.length === 12;

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

	removeMask(value: string) {
		value = value.replace(/[^a-zA-Z0-9 ]/g, '');
		this.renderer.setProperty(this.input.nativeElement, 'value', value);
	}
}
