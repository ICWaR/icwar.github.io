import { Component, ElementRef, ViewChild } from '@angular/core';
import { monsoonPageData } from '../../../data-entries/json/monsoon-schools';

@Component({
  selector: 'app-activities-and-events',
  templateUrl: './activities-and-events.component.html',
  styleUrls: ['./activities-and-events.component.scss']
})
export class ActivitiesAndEventsComponent {
  years: string[] = Object.keys(monsoonPageData);
  selectedYear: string;
  eventData: any;
  @ViewChild('scrollToTopButton') scrollToTopButton?: ElementRef;

  constructor() {
    // Sort the years in descending order and select the first (latest) year
    this.years.sort((a, b) => parseInt(b) - parseInt(a));
    this.selectedYear = this.years[0];
    this.selectYear(this.selectedYear);
  }

  selectYear(year: string): void {
    this.selectedYear = year;
    this.eventData = monsoonPageData[year as unknown as keyof typeof monsoonPageData]; // Type assertion
  }

  ngAfterViewInit() {
    window.addEventListener('scroll', () => this.scrollFunction());
  }

  scrollFunction(): void {
    if (this.scrollToTopButton) {
      if (window.scrollY > 300) {
        this.scrollToTopButton.nativeElement.style.display = 'block';
      } else {
        this.scrollToTopButton.nativeElement.style.display = 'none';
      }
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
