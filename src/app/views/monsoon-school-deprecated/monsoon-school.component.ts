import { Component } from '@angular/core';
import { monsoonPageData } from 'src/data-entries/json/monsoon-schools';
import { rainAnimation } from './rainAnimationComponent';
import 'jquery';
@Component({
  selector: 'app-monsoon-school',
  templateUrl: './monsoon-school.component.html',
  styleUrls: ['./monsoon-school.component.scss']
})
export class MonsoonSchoolComponent {
  $=$;
  rainAnimation = rainAnimation;

  monsoonPageData = monsoonPageData;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // $("body").css("overflow", "hidden");
    this.fullDivScrollAndFade();
  }

  fullDivScrollAndFade(){
    const section__content = document.querySelectorAll('.fullPageDiv-Content');

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
                // if($(child).hasClass('letter-typer') && !$(child).hasClass('letter-typer-completed')){
                //   this.letterTyper(child);
                // }
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
  }

  getJsonKeys(data:any){
    return Object.keys(data);
  }
  getJsonValues(data:any):any[]{
    return Object.values(data);
  }
}
