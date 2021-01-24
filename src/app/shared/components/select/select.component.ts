import { Component, Input } from '@angular/core';

@Component({
	selector: 'jd-select',
	templateUrl: './select.component.html',
	styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  @Input() label: string;
}
