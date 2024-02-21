import { seminars } from 'src/data-entries/json/Seminars';
import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-students-seminar',
  templateUrl: './students-seminar.component.html',
  styleUrls: ['./students-seminar.component.scss']
})
export class StudentsSeminarComponent {
  $=$;
  seminars = seminars;
  type:any;
  constructor(private route: ActivatedRoute,private router: Router){

}
ngAfterViewInit(): void {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  this.type = <string>this.router.url.split('/').pop();
  switch(this.type){
    case this.type != 'Workshops':
      this.updateData('Seminars')
      break;
  }
}
updateData(dataType:string){

  $('#Workshops').addClass('d-none')
  $('#Seminars').removeClass('d-none')


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

