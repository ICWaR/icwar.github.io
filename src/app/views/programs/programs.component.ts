import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent {
  $=$;
imgArr =["https://sandrp.files.wordpress.com/2017/12/0-17217500_1510832530_latha.jpg?w=982",
"https://c8.alamy.com/comp/ET0E1Y/chalakudy-river-chalakkudy-river-chalakkudi-river-chalakudy-puzha-ET0E1Y.jpg",
"https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/styles/info_block/public/thumbnails/image/CRRLTRHomepage.jpg?itok=R-NiQzFd",
"https://nesplandscapes.edu.au/wp-content/uploads/2020/10/Fitzroy-fish-team-scaled.jpeg"
]
ngAfterInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  // $('.gallery span').css({'transform':'rotateY(calc(var(--i) * ' + (360/this.imgArr.length)+'deg)) translateZ(380px)'})

}
}
