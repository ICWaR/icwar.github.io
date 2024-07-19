import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { monsoonPageData } from '../../../data-entries/json/monsoon-schools';

@Component({
  selector: 'app-activities-and-events',
  templateUrl: './activities-and-events.component.html',
  styleUrls: ['./activities-and-events.component.scss']
})
export class ActivitiesAndEventsComponent implements OnInit {
  years: string[] = [];
  selectedYear: string = '';
  eventData: any;
  @ViewChild('scrollToTopButton') scrollToTopButton?: ElementRef;

  ngOnInit() {
    this.years = Object.keys(monsoonPageData).sort((a, b) => parseInt(b) - parseInt(a));
    this.selectedYear = this.years[0];
    this.selectYear(this.selectedYear);
    window.addEventListener('scroll', () => this.scrollFunction());
  }

  selectYear(year: string): void {
    this.selectedYear = year;
    this.eventData = monsoonPageData[year as unknown as keyof typeof monsoonPageData]; // Type assertion
  }

  scrollFunction(): void {
    if (this.scrollToTopButton) {
      this.scrollToTopButton.nativeElement.style.display = window.scrollY > 300 ? 'block' : 'none';
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
