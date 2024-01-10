import { Component } from '@angular/core';
import {homepageData} from '../../../data-entries/json/homepage';
import { newsJson } from 'src/data-entries/json/news';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  $=$;
  data =  homepageData;
  slides=['https://www.gfz-potsdam.de/fileadmin/_processed_/8/8/csm_grace_sticker_01_94f4685989.jpeg','../../../assets/images/Slide/slideshow3.jpg','https://img.rasset.ie/0010713d-500.jpg']
  news=newsJson;
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
}
