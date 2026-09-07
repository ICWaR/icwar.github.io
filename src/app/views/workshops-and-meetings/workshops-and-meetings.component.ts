import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { workshops } from 'src/data-entries/json/workshops';

@Component({
  selector: 'app-workshops-and-meetings',
  templateUrl: './workshops-and-meetings.component.html',
  styleUrls: ['./workshops-and-meetings.component.scss']
})
export class WorkshopsAndMeetingsComponent implements OnInit {
  workshops = workshops;
  @ViewChild('scrollToTopButton') scrollToTopButton!: ElementRef;

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollFunction.bind(this));
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
