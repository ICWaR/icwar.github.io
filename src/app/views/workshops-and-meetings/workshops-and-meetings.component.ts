import { seminars } from 'src/data-entries/json/Seminars';
import { Component} from '@angular/core';
import { workshops } from 'src/data-entries/json/workshops';

@Component({
  selector: 'app-workshops-and-meetings',
  templateUrl: './workshops-and-meetings.component.html',
  styleUrls: ['./workshops-and-meetings.component.scss']
})

export class WorkshopsAndMeetingsComponent {
  $=$;
  workshops = workshops;
  seminars = seminars;

  ngOnInit(): void {


  }

   updateData(dataType:string){
      if(dataType === 'Workshops' ||  dataType === 'Meetings'){
        $('#Workshops').removeClass('d-none')
      $('#Seminars').addClass('d-none')
    }
    else{
      $('#Workshops').addClass('d-none')
      $('#Seminars').removeClass('d-none')
    }

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
