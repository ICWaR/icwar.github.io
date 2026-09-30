import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grace-hackweek',
  templateUrl: './grace-hackweek.component.html',
  styleUrls: ['./grace-hackweek.component.scss']
})
export class GRACEHackweekComponent implements OnInit {

  registrationLink = 'https://forms.office.com/Pages/ResponsePage.aspx?id=l80Vb6f240Gyxa1Bk5dkdq3rJ1Ud68lGqZfkEdmyx-RUNkUzQklKVlpKSEpHNU0wN0FJVUJXNDczOC4u';
  deadline = 'August 15, 2026';
  eventDates = 'October 05-09, 2026';

  constructor() { }

  ngOnInit(): void {
  }
}
