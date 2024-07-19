import { Component, ElementRef, ViewChild } from '@angular/core';
import { seminars } from 'src/data-entries/json/Seminars';

@Component({
  selector: 'app-students-seminar',
  templateUrl: './students-seminar.component.html',
  styleUrls: ['./students-seminar.component.scss']
})
export class StudentsSeminarComponent {
  $=$;
  seminars = seminars;
  type:any;
  @ViewChild('scrollToTopButton') scrollToTopButton!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollFunction.bind(this)); // Add scroll event listener
  }

  removeSpaceFromString(str: string) {
    return str.replaceAll(' ', '_');
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

