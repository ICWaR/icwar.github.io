import { Component } from '@angular/core';
import { gallery } from 'src/data-entries/json/gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent {
  gallery= gallery;
  lastIndex = 0;
  callCount = 0;
  ngOnInit(): void {

    console.log(this.getJsonValues(this.getValueForKey(this.getValueForKey(gallery,'Open Day'),'2019')));

  }

  getJsonKeys(data:any){
    return Object.keys(data);
  }
  getJsonValues(data:any){
    return Object.values(data);
  }
  getValueForKey(data:any,key:string){
    return data[key];
  }
  myFunc(){
    if(++this.callCount === 3){
      this.lastIndex = (this.lastIndex+1)%3;
      this.callCount = 0;
    }

    return this.lastIndex;
  }
}
