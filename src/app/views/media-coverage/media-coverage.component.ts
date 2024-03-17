import { Component } from '@angular/core';
import { media_coverage } from '../../../data-entries/json/media-coverage';

@Component({
  selector: 'app-media-coverage',
  templateUrl: './media-coverage.component.html',
  styleUrls: ['./media-coverage.component.scss']
})
export class MediaCoverageComponent {
  media_coverage = media_coverage;
}
