import { Component } from '@angular/core';
import { workshops } from 'src/data-entries/json/workshops';
@Component({
  selector: 'app-workshops-and-meetings',
  templateUrl: './workshops-and-meetings.component.html',
  styleUrls: ['./workshops-and-meetings.component.scss']
})
export class WorkshopsAndMeetingsComponent {
workshops = workshops;
removeSpaceFromString(str:string){
  return str.replaceAll(' ','_')
}
}
