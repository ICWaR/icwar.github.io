import { Component, TemplateRef, ViewChild } from '@angular/core';
import * as data from '../../../data-entries/json/research';
import 'jquery';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent {
  $=$;
  data=data;
  currIndex:number=0;
  modalService: any;
  sectionList:any;
  @ViewChild('template') templateRef: TemplateRef<any> | undefined;

  ngAfterViewInit(): void {

  }
  ngOnInit(): void {

    const section__content = document.querySelectorAll('.section__content');
    this.sectionList = section__content;

    const appearOptions = {
      rootMargin: "0px",
      threshold: 0.75
    };

    const appearOnScroll = new IntersectionObserver(
        (entries, appearOnScroll) => {
        entries.forEach((entry)=> {
            if (!entry.isIntersecting) {
                entry.target.classList.remove("appear");
            }
            else {
              entry.target.childNodes.forEach((child)=>{
                if($(child).hasClass('letter-typer') && !$(child).hasClass('letter-typer-completed')){
                  this.letterTyper(child);
                }
              })
                entry.target.classList.add("appear");
            }
        });
    },
    appearOptions);

    section__content.forEach(section => {
        appearOnScroll.observe(section);
    });


    var fadeElements = document.getElementsByClassName('scrollFade');

function scrollFade() {
	var viewportBottom = window.scrollY + window.innerHeight;

	for (var index = 0; index < fadeElements.length; index++) {
		var element = fadeElements[index];
		var rect = element.getBoundingClientRect();

		var elementFourth = rect.height/8;//Fade In Point
		var fadeInPoint = window.innerHeight - elementFourth;
		var fadeOutPoint = -(rect.height/4);//Fade Out Point

		if (rect.top <= fadeInPoint) {
			element.classList.add('scrollFade--visible');
			element.classList.add('scrollFade--animate');
			element.classList.remove('scrollFade--hidden');
		} else {
			element.classList.remove('scrollFade--visible');
			element.classList.add('scrollFade--hidden');
		}

		if (rect.top <= fadeOutPoint) {
			element.classList.remove('scrollFade--visible');
			element.classList.add('scrollFade--hidden');
		}
	}
}

document.addEventListener('scroll', scrollFade);
window.addEventListener('resize', scrollFade);
document.addEventListener('DOMContentLoaded', function() {
    scrollFade();
});

///////////
  }
  getJsonKeys(data:any):string[]{
    return Object.keys(data);
  }
  getValueForKey(key:string,data:any):any[]{
    let result:any;
     Object.entries(data).forEach(f=>{
      if(f[0]==key)
        result =  f[1];
    })

    return result;
  }
  openModal(modalId: TemplateRef<any>){
    this.modalService.open(modalId);
    }

    verticalScrollButtonClick(){
      this.sectionList = document.querySelectorAll('.section__content');
      this.sectionList.forEach( (item:any,index:any) => {
        if(item.classList.contains('appear'))
          this.currIndex = index;
    })

      $(this.sectionList[this.currIndex]).removeClass('appear');
      $(this.sectionList[this.currIndex+1]).addClass('appear');
     console.log(this.currIndex )

      // $('div.screen').animate({
      //   scrollTop: (<any>$(document.querySelectorAll('.section')[this.currIndex+1])).offset().top
      // }, 'slow');

      $('div.screen').scrollTop((<any>$(document.querySelectorAll('.section')[this.currIndex+1])).offset().top)
      $('div.screen').scrollTop((<any>$(document.querySelectorAll('.section')[this.currIndex+1])).offset().top)
      // this.verticalScrollButtonClick()
      // $('.active').removeClass('active');
      // $target.addClass('active');
    }

    letterTyper(element:any){
      $(element).addClass('letter-typer-completed')
      $(element).height((<any>$(element)).height())
      $(element).width((<any>$(element)).width())
      var loadingPageText = $(element).text();
      var currChar = 0;
      var timer =  setInterval(function(){
        currChar++;
        $(element).text(loadingPageText.substring(0,currChar));

        if (currChar == loadingPageText.length) {
          clearTimeout(timer);
      }
      },10)
    }

}
