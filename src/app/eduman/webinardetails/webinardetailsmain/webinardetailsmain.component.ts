import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-webinardetailsmain',
  templateUrl: './webinardetailsmain.component.html',
  styleUrls: ['./webinardetailsmain.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WebinardetailsmainComponent {
  onFormSubmit(event: Event) {
    event.preventDefault();
  }
}
