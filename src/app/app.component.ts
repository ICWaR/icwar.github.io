import { Component } from '@angular/core';
import 'jquery';

//configurations, DO NOT REMOVE
import { configurations } from 'src/data-entries/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  state:boolean = false;
  configurations = configurations;
  title = 'IISC-ICWaR';
  currentYear = Number(new Date().getFullYear());
  public screenWidth: any;
  public screenHeight: any;

  ngOnInit(): void {

    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;

    $('body').css(configurations['global-settings']);

    $(atob('Zm9vdGVy')).children().last().append(atob('PHN0eWxlPmh0bWwsYm9keXtkaXNwbGF5OmJsb2NrfTwvc3R5bGU+PHNwYW4gc3R5bGU9ImZsb2F0OnJpZ2h0OyI+RGVzaWduZWQgYnkgQXJjaGl0IFIgQnViYmVyLjwvc3Bhbj4='))

    $('.nav-menu-button').addClass('navbar-toggler-icon')

    //Script To animate menu button on small devices
    $('.navbar-toggler').on('click',function(){
      if($('.nav-menu-button').hasClass('navbar-toggler-icon')){
        $('.nav-menu-button').addClass('btn-close p-3')
        $('.nav-menu-button').removeClass('navbar-toggler-icon')
      }
      else{
        $('.nav-menu-button').addClass('navbar-toggler-icon')
        $('.nav-menu-button').removeClass('btn-close p-3')
      }
    });
    //Special script to detect click outside nav on nav open
    $(function() {
      $(document).on('click',function (event) {
        var $target = $(event.target);
        if(!$target.closest('#nav').length )
          (<any>$('.navbar-collapse')).collapse('hide');
      });

      if(window.innerWidth<768){
      $(".nav-link").on('click',function (event) {
          if(!$(this).hasClass('dropdown-toggle'))
            (<any>$('.navbar-collapse')).collapse('hide');
      });
    }

    // $('footer>p').append('<span style="float:right;">Designed by Archit R Bubber.</span>')
    // $(atob('Zm9vdGVyPnA')).append(atob('PHN0eWxlPmh0bWwsYm9keXtkaXNwbGF5OmJsb2NrfTwvc3R5bGU+PHNwYW4gc3R5bGU9ImZsb2F0OnJpZ2h0OyI+RGVzaWduZWQgYnkgQXJjaGl0IFIgQnViYmVyLjwvc3Bhbj4='))

    });




  }

  getSubDropDownList(subDropdownItems:any){
    return subDropdownItems["subDropdownItems"];
  }
  getRedirectLink(item:any){
    return item['redirect'];
  }
  goToUrl(url:string): void {
    window.location.href = url;
}
}
