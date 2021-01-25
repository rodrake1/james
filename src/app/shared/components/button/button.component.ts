import { Component, Input } from '@angular/core';
import * as EventEmitter from 'events';

@Component({
	selector: 'jd-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() type: string;

  @Input() disabled;

  onClick = new EventEmitter();

  click() {
    this.onClick.emit('');
  }
}
