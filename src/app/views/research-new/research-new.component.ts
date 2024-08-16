import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { research_projects, research_vignettes, collaborations, groups, research_slides } from 'src/data-entries/json/research';

interface Vignette {
  details: string;
  imgSrc: string;
}

@Component({
  selector: 'app-research-new',
  templateUrl: './research-new.component.html',
  styleUrls: ['./research-new.component.scss']
})
export class ResearchNewComponent {
  slides = research_slides;
  research_projects: any = research_projects;
  abbreviations: any[] = [];
  activeTab: 'ongoing' | 'completed' = 'ongoing';
  showProjects: boolean = false;
  research_vignettes: Vignette[] = research_vignettes;
  showVignettes: boolean = false;
  collaborations: any = collaborations;
  showCollaborations: boolean = false;
  showAboutSection: boolean = true;
  showGroups: boolean = false;
  groups: any[] = groups;

  @ViewChild('scrollToTopButton') scrollToTopButton!: ElementRef;

  constructor() {
    this.fetchAbbreviations();
    window.addEventListener('scroll', this.scrollFunction.bind(this));
  }

  setActiveTab(tab: 'ongoing' | 'completed') {
    this.activeTab = tab;
    this.fetchAbbreviations();
  }

  fetchAbbreviations() {
    this.abbreviations = this.research_projects.Abbreviations;
  }

  getKey(item: any): string {
    return Object.keys(item)[0];
  }

  toggleSection(section: string): void {
    this.showProjects = section === 'projects';
    this.showVignettes = section === 'vignettes';
    this.showCollaborations = section === 'collaborations';
    this.showAboutSection = section === 'about';
    this.showGroups = section === 'groups';

    this.scrollDown();
  }

  scrollFunction(): void {
    if (this.scrollToTopButton) {
      this.scrollToTopButton.nativeElement.style.display = window.scrollY > 300 ? 'block' : 'none';
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  scrollDown(): void {
    window.scrollTo({
      top: 500,
      behavior: 'smooth'
    });
  }
}
