import { media_coverage } from './../../../data-entries/json/media-coverage';
import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-media-coverage',
  templateUrl: './media-coverage.component.html',
  styleUrls: ['./media-coverage.component.scss']
})
export class MediaCoverageComponent {
  $=$;
  media_coverage = media_coverage;
  type:any;
  constructor(private route: ActivatedRoute,private router: Router){

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.type = <string>this.router.url.split('/').pop();
  }

   updateData(dataType:string){

    $('ol>button').each(function () {
      if(this.innerHTML !== dataType)
        $(this).removeClass('font-highlight')
      else
        $(this).addClass('font-highlight')
    });

  }

  removeSpaceFromString(str:string){
    return str.replaceAll(' ','_')
  }

}
