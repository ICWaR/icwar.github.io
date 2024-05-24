import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { outreach } from 'src/data-entries/json/outreach';

@Component({
  selector: 'app-outreach',
  templateUrl: './outreach.component.html',
  styleUrls: ['./outreach.component.scss']
})
export class OutreachComponent {
  outreach= outreach;
  @ViewChild('scrollToTopButton') scrollToTopButton!: ElementRef;

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollFunction.bind(this));
  }
  scrollFunction(): void {
    if (this.scrollToTopButton) {
      if (window.scrollY >300) {
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
