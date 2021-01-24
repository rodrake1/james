import { Component, Input } from '@angular/core';

@Component({
	selector: 'jd-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() picture: string;

	@Input() name: string;

	@Input() id: string;

  @Input() address: string;
  
  get city() {
    return  this.address.split(',')[1];
  }

  get street() {
    return this.address.split(',')[0];
  }
}
