import { Component } from '@angular/core';
import { facilities } from 'src/data-entries/json/facilities';

@Component({
  selector: 'app-centres-and-facilities',
  templateUrl: './centres-and-facilities.component.html',
  styleUrls: ['./centres-and-facilities.component.scss']
})
export class CentresAndFacilitiesComponent {
  facilitiesList = facilities;
}
