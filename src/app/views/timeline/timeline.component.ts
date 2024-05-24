import { Component } from '@angular/core';
import { timeline } from './../../../data-entries/json/timeline';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {
 timeline= timeline;
}

