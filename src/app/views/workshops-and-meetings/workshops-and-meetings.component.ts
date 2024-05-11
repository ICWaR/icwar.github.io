import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { workshops } from 'src/data-entries/json/workshops';
import { seminars } from 'src/data-entries/json/Seminars';

@Component({
  selector: 'app-workshops-and-meetings',
  templateUrl: './workshops-and-meetings.component.html',
  styleUrls: ['./workshops-and-meetings.component.scss']
})
export class WorkshopsAndMeetingsComponent implements OnInit {
  workshops = workshops;
  seminars = seminars;
  selectedTab: string = 'Workshops';
  @ViewChild('scrollToTopButton') scrollToTopButton!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    window.addEventListener('scroll', this.scrollFunction.bind(this));

    const childRoute = this.route.snapshot.firstChild?.routeConfig?.path;
    this.workshops = workshops;
    this.seminars = seminars;
    if (childRoute === 'seminars') {
      this.selectedTab = 'Seminars';
    } else {
      this.selectedTab = 'Workshops';
    }
  }

  updateData(dataType: string) {
    this.selectedTab = dataType;
    if (dataType === 'Workshops') {
      this.router.navigate(['workshops'], { relativeTo: this.route });
    } else {
      this.router.navigate(['seminars'], { relativeTo: this.route });
    }
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
