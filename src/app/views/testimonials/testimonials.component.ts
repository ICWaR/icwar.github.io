import { Component } from '@angular/core';
import { testimonials } from 'src/data-entries/json/testimonials';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonialsData = testimonials;
}
