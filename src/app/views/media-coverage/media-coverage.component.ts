import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { media_coverage } from '../../../data-entries/json/media-coverage';

@Component({
  selector: 'app-media-coverage',
  templateUrl: './media-coverage.component.html',
  styleUrls: ['./media-coverage.component.scss']
})
export class MediaCoverageComponent {
  media_coverage = media_coverage;

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
