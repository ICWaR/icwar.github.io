import { Component } from '@angular/core';
import { configurations } from 'src/data-entries/config';
import { publications } from 'src/data-entries/json/publications';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent {
  $=$;
  topOffSet :any;
  publications = publications;

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.

    this.getKeysOfJson(configurations['publications']).forEach(key=>{
      $('body').css(key,"unset");
    })

    $('body').css('global-configurations');

  }

  ngAfterViewInit(){
    this.topOffSet = $('#0').offset()?.top;
    $('body').css(configurations['publications']);
  }

  getKeysOfJson(data:any):string[]{
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

  updateHighlghtedProffName(currIndex:number){
    console.log( $('#'+currIndex).offset());
    // $('#'+currIndex).offset({top:this.topOffSet,left:$('#'+currIndex).offset()?.left});

    $('#'+currIndex).addClass('highlightRow2s');

    $('.proffesorsSideNavHighlight').children().each((index, element) => {
      if(index==currIndex)
        $(element).addClass('font-highlight');
      else
        $(element).removeClass('font-highlight');
    });

  }
}
