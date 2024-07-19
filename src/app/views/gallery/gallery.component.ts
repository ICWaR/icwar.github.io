import { Component, OnInit } from '@angular/core';
import { gallery } from 'src/data-entries/json/gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  gallery = gallery;
  lastIndex = 0;
  callCount = 0;

  ngOnInit(): void {
    console.log(this.getJsonValues(this.getValueForKey(this.getValueForKey(this.gallery, 'Open Day'), '2019')));
  }

  getJsonKeys(data: any, sortDesc: boolean = false): string[] {
    const keys = Object.keys(data);
    if (sortDesc) {
      return keys.sort((a, b) => parseInt(b) - parseInt(a));
    }
    return keys;
  }

  getJsonValues(data: any): any[] {
    return Object.values(data);
  }

  getValueForKey(data: any, key: string): any {
    return data[key];
  }

  myFunc(): number {
    if (++this.callCount === 3) {
      this.lastIndex = (this.lastIndex + 1) % 3;
      this.callCount = 0;
    }
    return this.lastIndex;
  }
}
