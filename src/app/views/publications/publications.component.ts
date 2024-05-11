import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { journal, conference, bookChapter, books } from 'src/data-entries/json/publications';

interface Tab {
  id: string;
  data: any[];
}

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {
  activeTab: string = 'journal'; // Define activeTab property

  tabs: Tab[] = [
    { id: 'journal', data: journal },
    { id: 'conference', data: conference },
    { id: 'bookChapter', data: bookChapter },
    { id: 'book', data: books }
  ];

  @ViewChild('scrollToTopButton') scrollToTopButton!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    // Default to showing the Journal tab
    this.showTab('journal');
    window.addEventListener('scroll', this.scrollFunction.bind(this)); // Add scroll event listener
  }

  showTab(tabName: string): void {
    // Hide all tabs
    this.tabs.forEach(tab => {
      const tabElement = document.getElementById(tab.id);
      if (tabElement) {
        tabElement.style.display = 'none';
      }
    });

    // Show selected tab
    const tab = this.tabs.find(t => t.id === tabName);
    if (tab) {
      const tabElement = document.getElementById(tab.id);
      if (tabElement) {
        tabElement.style.display = 'block';
      }
      this.activeTab = tabName; // Update activeTab
    }
  }

  scrollFunction(): void {
    if (this.scrollToTopButton) {
      if (window.scrollY >300) {
        this.scrollToTopButton.nativeElement.style.display = 'block';
      } else {
        this.scrollToTopButton.nativeElement.style.display = 'none';
      }
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
