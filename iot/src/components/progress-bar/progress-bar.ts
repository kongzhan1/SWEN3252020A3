import { Component, Input } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: 'progress-bar.html'
})
export class ProgressBarComponent {

  // This input field listens to the instance which calls this component
  // Then it gets the 
  @Input('progress') progress;

  constructor() {}

}
