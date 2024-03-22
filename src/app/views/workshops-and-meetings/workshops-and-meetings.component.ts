import { Component } from '@angular/core';
import { workshops } from 'src/data-entries/json/workshops';
import { seminars } from 'src/data-entries/json/Seminars';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-workshops-and-meetings',
  templateUrl: './workshops-and-meetings.component.html',
  styleUrls: ['./workshops-and-meetings.component.scss']
})
export class WorkshopsAndMeetingsComponent {
  workshops = workshops;
  seminars = seminars;
  showWorkshops: boolean = true;
  showSeminars: boolean = false;

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Get the current route URL and set the visibility accordingly
    const currentRoute = this.router.url.split('/')[1];
    if (currentRoute === 'Seminars') {
      this.showWorkshops = false;
      this.showSeminars = true;
    }
  }

  // Sanitize the HTML content before binding it
  getSanitizedDetails(details: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(details);
  }

  // Function to replace spaces in string with underscores
  removeSpaceFromString(str: string): string {
    return str.replace(/ /g, '_');
  }

  // Update the visibility based on the selected option
  updateData(dataType: string) {
    if (dataType === 'Workshops') {
      this.showWorkshops = true;
      this.showSeminars = false;
    } else {
      this.showWorkshops = false;
      this.showSeminars = true;
    }
  }
}
