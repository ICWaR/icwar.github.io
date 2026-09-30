import { Component, OnInit } from '@angular/core';

import { faculty, researchStudents, postDoctoralScholars, projectStaff } from '../../../data-entries/json/people';

@Component({
  selector: 'app-people-directory',
  templateUrl: './people-directory.component.html',
  styleUrls: ['./people-directory.component.scss']
})
export class PeopleDirectoryComponent implements OnInit {

  faculty: any[] = [];
  researchStudents: any[] = [];
  postDoctoralScholars: any[] = [];
  projectStaff: any[] = [];

  ngOnInit(): void {
    this.loadFaculty();
    this.loadResearchStudents();
    this.loadPostDoctoralScholars();
    this.loadProjectStaff();
  }

  loadFaculty() {
    faculty.forEach((group: any) => {
      const category = Object.keys(group)[0];
      const people = group[category] as any[];
      if (!people) return;

      people.forEach(p => {
        this.faculty.push({
          category,
          name: p.name,
          designation: p.Designation,
          department: p.department,
          email: p.email
        });
      });
    });
  }

  loadResearchStudents() {
    const current = researchStudents?.[0]?.Current;
    if (!current) return;

    current.forEach((s: any) => {
      this.researchStudents.push({
        name: s.name,
        degree: s['Degree Registered'],
        affiliation: s['Degree and Affiliation'],
        email: s.email,
        supervisor: s['Name of Supervisors']
      });
    });
  }

  loadPostDoctoralScholars() {
    const current = postDoctoralScholars?.[0]?.Current;
    if (!current) return;

    current.forEach((p: any) => {
      this.postDoctoralScholars.push({
        name: p.name,
        designation: p.Designation,
        affiliation: p['Degree and Affiliation'],
        email: p.email,
        project: p.Project
      });
    });
  }

  loadProjectStaff() {
    const current = projectStaff?.[0]?.Current;
    if (!current) return;

    current.forEach((p: any) => {
      this.projectStaff.push({
        name: p.name,
        designation: p.Designation,
        affiliation: p['Degree and Affiliation'],
        email: p.email,
        project: p.Project
      });
    });
  }
}
