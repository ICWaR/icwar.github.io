import { Component } from '@angular/core';
import { labCards, equipmentTable, nonIiscBookingLink } from 'src/data-entries/json/facilities';

@Component({
  selector: 'app-centres-and-facilities',
  templateUrl: './centres-and-facilities.component.html',
  styleUrls: ['./centres-and-facilities.component.scss']
})
export class CentresAndFacilitiesComponent {
  labCards = labCards;
  equipmentTable = equipmentTable;
  nonIiscBookingLink = nonIiscBookingLink;
}
