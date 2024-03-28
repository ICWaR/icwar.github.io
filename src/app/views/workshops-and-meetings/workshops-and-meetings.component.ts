import { Component, OnInit } from '@angular/core';
import { workshops } from 'src/data-entries/json/workshops';
import { seminars } from 'src/data-entries/json/Seminars';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { SecurityContext } from '@angular/core';

@Component({
  selector: 'app-workshops-and-meetings',
  templateUrl: './workshops-and-meetings.component.html',
  styleUrls: ['./workshops-and-meetings.component.scss']
})
export class WorkshopsAndMeetingsComponent implements OnInit {
  workshops = workshops;
  seminars = seminars;
  showWorkshops: boolean = true;
  showSeminars: boolean = false;

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Subscribe to route parameter changes
    this.route.queryParams.subscribe(params => {
      const type = params['type'];
      if (type === 'Seminars') {
        this.showWorkshops = false;
        this.showSeminars = true;
      } else {
        this.showWorkshops = true;
        this.showSeminars = false;
      }
    });
  }

  // Sanitize the HTML content before binding it
  getSanitizedDetails(details: string): SafeHtml | null {
    if (details) {
      return this.sanitizer.sanitize(SecurityContext.HTML, details) || null;
    }
    return null;
  }

  // Function to replace spaces in string with underscores
  removeSpaceFromString(str: string): string {
    return str.replace(/ /g, '_');
  }
}
