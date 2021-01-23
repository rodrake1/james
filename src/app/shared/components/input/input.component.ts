import { Component, Input } from '@angular/core';

@Component({
  selector: 'jd-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() label: string;
}
