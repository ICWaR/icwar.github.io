import { Component } from '@angular/core';
import { configurations } from 'src/data-entries/config';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  configurations= configurations;

}
