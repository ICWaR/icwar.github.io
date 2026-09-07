import { Component } from '@angular/core';
import { courses } from 'src/data-entries/json/courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses = courses;
}
