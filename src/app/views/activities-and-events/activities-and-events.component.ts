import { Component, OnInit } from '@angular/core';
import { monsoonPageData } from '../../../data-entries/json/monsoon-schools';

// Define a union type for the allowed values of selectedYear
type YearOption = "2023" | "2019" | "2018" | "2017";

@Component({
  selector: 'app-activities-and-events',
  templateUrl: './activities-and-events.component.html',
  styleUrls: ['./activities-and-events.component.scss']
})
export class ActivitiesAndEventsComponent implements OnInit {
  selectedYear: YearOption = '2023'; // Set default year to 2023
  eventData: any;

  constructor() {}

  ngOnInit(): void {
    this.selectYear(this.selectedYear);
  }

  selectYear(year: keyof typeof monsoonPageData): void {
    this.selectedYear = year;
    this.eventData = monsoonPageData[year];
  }
}


