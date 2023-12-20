// import { News } from './homepage.service';
import { Component } from '@angular/core';
import {homepageData} from '../../../data-entries/json/homepage';
import { newsJson } from '../../../data-entries/json/news';
import * as $ from 'jquery';
import { seminars } from 'src/data-entries/json/Seminars';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  public newsJsonProcessed: any;
  public news  = newsJson;
  public  data = homepageData;
  public screenWidth: any;
  public screenHeight: any;
  public slides = homepageData.slides
  stringArr =[];
  seminarsForDisplay:Seminars[] = (<any[]>seminars['ICWaR Guest Seminar Series']);

  responsiveOptions = [{
    breakpoint: '1024px',
    numVisible: 1,
    numScroll: 3
  }];


  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.newsJsonProcessed = newsJson;
    console.log(this.seminarsForDisplay)

  }
  ngAfterInit():void{
    // console.log("Now "+(<any>$('.start-cover-animation > h1')).text());
  }

redirectTo(link:string){
  window.location.href=link;
}
removeSpaceFromString(str:string){
  return str.replaceAll(' ','_')
}

}
export interface Seminars{
  imgSrc: string;
  'title': string;
  'Name of the speaker':string;
  'Title of the Seminar':string;
  'Date and Time':string
  'Online Platform':string;
  'About the Speaker':string
  'Abstract':string
}
export interface News{
  title: string;
  imgSrc: string;
  date:string
  redirectTo:string
}
