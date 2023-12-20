import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { seminars } from 'src/data-entries/json/Seminars';
import { publications } from 'src/data-entries/json/publications';
import 'jquery';
@Component({
  selector: 'app-seminars-and-publications',
  templateUrl: './seminars-and-publications.component.html',
  styleUrls: ['./seminars-and-publications.component.scss']
})
export class SeminarsAndPublicationsComponent {
  $=$;
  typesOfSeminars =  Object.keys(seminars);
  eachSeminarArray :any = Object.values(seminars);
  publications = publications;
  nameOfDataToRender = [] = Object.keys(seminars);

  constructor(private router: Router ) {

  }
  ngAfterViewInit(){
    this.nameOfDataToRender.push('Publications');
    this.nameOfDataToRender.forEach(name=>
      (<any>$('#'+ name.replaceAll(' ','_') )).hide()
      );

  }

  getKeysOfJson(data:any){
    return Object.keys(data);
  }
  returnJsonOfKey(data:{},key:string){
    let keySet = Object.keys(data);
    let index = keySet.indexOf(key);
  }
  renderRequestedSeminarType(name:string){
    (<any>$('#'+ name.replaceAll(' ','_') )).toggle()
  }
  removeSpaceFromString(str:string){
    return str.replaceAll(' ','_')
  }
  showDataForSelectedTab(name:string){
    this.nameOfDataToRender.forEach(name=>
      (<any>$('#'+ name.replaceAll(' ','_') )).hide()
      )
      this.renderRequestedSeminarType(name)

      var $target = (<any>$('.container-md'));
      if ($target.length == 0)
        $target = $('.card:first');

      $('html, body').animate({
        scrollTop: $target.offset().top-100
      }, 'normal');

  }
}
