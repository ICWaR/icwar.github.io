import { Component } from '@angular/core';
import { research_projects } from 'src/data-entries/json/research';
import { research_vignettes } from 'src/data-entries/json/research';
import { collaborations } from 'src/data-entries/json/research';

interface Abbreviation {
  abbreviation: string;
  definition: string;
}
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
  research_projects: any = research_projects;
  abbreviations: any[] = [];
  activeTab: 'ongoing' | 'completed' = 'ongoing';
  showProjects: boolean = false;
  research_vignettes: Vignette[] = research_vignettes;
  showVignettes: boolean = false;
  collaborations: any = collaborations;
  showCollaborations: boolean = false;
  showAboutSection: boolean = true; // Add this property

  constructor() {
    this.fetchAbbreviations();
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

  toggleProjects() {
    this.showProjects = !this.showProjects;
    if (this.showProjects) {
      this.showAboutSection = false;
      this.showVignettes = false;
      this.showCollaborations = false;
    }
  }

  toggleVignettes() {
    this.showVignettes = !this.showVignettes;
    if (this.showVignettes) {
      this.showAboutSection = false;
      this.showProjects = false;
      this.showCollaborations = false;
    }
  }

  toggleCollaborations() {
    this.showCollaborations = !this.showCollaborations;
    if (this.showCollaborations) {
      this.showAboutSection = false;
      this.showProjects = false;
      this.showVignettes = false;
    }
  }

  toggleAboutSection() { // Define toggleAboutSection method
    this.showAboutSection = !this.showAboutSection;
    if (this.showAboutSection) {
      this.showProjects = false;
      this.showVignettes = false;
      this.showCollaborations = false;
    }
  }
}
