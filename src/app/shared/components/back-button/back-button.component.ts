import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
	selector: 'jd-back-button',
	templateUrl: './back-button.component.html',
	styleUrls: ['./back-button.component.scss'],
	providers: [{ provide: ButtonComponent, useExisting: BackButtonComponent }]
})
export class BackButtonComponent extends ButtonComponent {}
