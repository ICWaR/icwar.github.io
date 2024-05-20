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
}
