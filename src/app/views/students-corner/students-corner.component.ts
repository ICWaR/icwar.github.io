import { Component } from '@angular/core';
import { blogs } from 'src/data-entries/json/blogs';

@Component({
  selector: 'app-students-corner',
  templateUrl: './students-corner.component.html',
  styleUrls: ['./students-corner.component.scss']
})
export class StudentsCornerComponent {
  blogs = blogs;
  selectedBlog: any;
  currentSlideIndex = 0;

  showDetails(blog: any): void {
    this.selectedBlog = blog;
  }

  generateBlogSlices(size: number): any[] {
    const slices = [];
    for (let i = 0; i < this.blogs.length; i += size) {
      slices.push(this.blogs.slice(i, i + size));
    }
    return slices;
  }

  slideTo(index: number): void {
    console.log('Clicked on slide index:', index);
    this.currentSlideIndex = index;
  }
  
  prevSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex === 0) ? (this.generateBlogSlices(3).length - 1) : (this.currentSlideIndex - 1);
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex === this.generateBlogSlices(3).length - 1) ? 0 : (this.currentSlideIndex + 1);
  }
}
