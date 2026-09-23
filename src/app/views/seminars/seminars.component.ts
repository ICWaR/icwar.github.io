import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { seminars } from 'src/data-entries/json/Seminars';

@Component({
  selector: 'app-seminars',
  templateUrl: './seminars.component.html',
  styleUrls: ['./seminars.component.scss']
})
export class SeminarsComponent implements OnInit {
  seminars = seminars;
  selectedTab: string = 'GuestSeminars'; // Default tab
  @ViewChild('scrollToTopButton') scrollToTopButton!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollFunction.bind(this));

    const childRoute = this.route.snapshot.firstChild?.routeConfig?.path;
    this.seminars = seminars;
    if (childRoute === 'community-seminars') {
      this.selectedTab = 'CommunitySeminars';
    } else {
      this.selectedTab = 'GuestSeminars';
    }
  }

  updateData(dataType: string) {
    this.selectedTab = dataType;
    if (dataType === 'GuestSeminars') {
      this.router.navigate(['guest-seminars'], { relativeTo: this.route });
    } else {
      this.router.navigate(['community-seminars'], { relativeTo: this.route });
    }
  }

  removeSpaceFromString(str: string): string {
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
