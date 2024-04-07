
import { Component } from '@angular/core';
import {homepageData} from '../../../data-entries/json/homepage';
import { newsJson } from 'src/data-entries/json/news';
import { seminars } from 'src/data-entries/json/Seminars';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  $=$;
  data =  homepageData;
  slides=['../../../assets/images/Slide/slideshow1.jpg','../../../assets/images/Slide/slideshow3.jpg','../../../assets/images/Slide/slideshow2.jpg']
  news=newsJson;
  seminars=seminars;
  constructor(
    private route: ActivatedRoute,private router: Router
  ) {}
  ngOnInit(): void {
    let redirectTo = this.route.snapshot.queryParamMap.get('route');
    if(redirectTo!=null){
      this.router.navigate([redirectTo])
    }
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    setTimeout(function(){
      $('.carousel-control-next').trigger('click')
    },7000);

    $('div.auto-scroll').children().each(function(){
      var div = $(this);
      var scroller = setInterval(function(){
      var pos = <any>div.scrollTop();
      // div.hide()
      div.scrollTop(++pos);
}, 1000)​
    })
  }

  getTruncatedTitle(title: string): string {
    const maxLength = 110; // Maximum length of truncated title
    if (title.length <= maxLength) {
      return title; // No need for truncation
    }
    // Find the index of the last space within maxLength characters
    const lastSpaceIndex = title.lastIndexOf(' ', maxLength);
    // If no space found, return the first maxLength characters
    if (lastSpaceIndex === -1) {
      return title.substring(0, maxLength);
    }
    // Otherwise, return the substring up to the last space
    return title.substring(0, lastSpaceIndex);
  }

}
