import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faculty,formerFaculty,visitors,researchStudents,projectStaff, officeStaff, postDoctoralScholars } from 'src/data-entries/json/people';
import 'jquery';

@Component({
  selector: 'app-faculty',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})

export class PeopleComponent {
  $=$;
  staffUnderDesignation:any;
  designationNames: string[]=[];
  type : string = '';
  dataType: string ='';
  activeTab: string = 'Current';
  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
  constructor(private route: ActivatedRoute,private router: Router){}

  ngOnInit(): void {
    this.type = <string>this.router.url.split('/').pop();

    let filterBy = this.route.snapshot.queryParamMap.get('filterBy');

    switch(this.type){
      case 'faculty':
        this.dataType = 'nested';
        this.processNestedDataForRendering(filterBy?.toString(),faculty);
        break;
      case 'formerFaculty':
        this.dataType = 'nested';
        this.processNestedDataForRendering(filterBy?.toString(),formerFaculty);
        break;
      case 'visitors':
        // this.dataType = 'nested';
        this.processRequestedDataForRendering('Visitors',visitors);
        break;
      case 'researchStudents':
        this.dataType = 'nested';
        this.processNestedDataForRendering(filterBy?.toString(),researchStudents);
        break;
      case 'postDoctoralScholars':
        this.dataType = 'nested';
        this.processNestedDataForRendering(filterBy?.toString(),postDoctoralScholars);
        break;
      case 'projectStaff':
        this.dataType = 'nested';
        this.processNestedDataForRendering(filterBy?.toString(),projectStaff);
        break;
      case 'officeStaff':
        this.dataType = 'nested';
        this.processNestedDataForRendering(filterBy?.toString(),officeStaff);
        break;
    }

  $('.facultySideNavHighlight>li').children().each( (index, element) => {
    if(element.textContent?.replaceAll(' ','').toUpperCase() == this.type.toUpperCase())
      $(element).addClass('font-highlight');
    else
      $(element).removeClass('font-highlight');
  });

  if (this.designationNames.length > 0 && !this.designationNames.includes(this.activeTab)) {
  this.activeTab = this.designationNames[0];
  }
}

  processNestedDataForRendering(filterBy:any,peopleData:any){
    this.staffUnderDesignation = [];

    for(var i=0;i<peopleData.length;i++){

      let key = Object.keys(peopleData[i])[0];

      if(filterBy==null || filterBy=='all'|| key==filterBy){
        this.designationNames.push(key);
        let c  = Object.values(peopleData[i]);
        this.staffUnderDesignation.push(c[0]);
      }
    }
    if (this.designationNames.length > 0 && !this.designationNames.includes(this.activeTab)) {
      this.activeTab = this.designationNames[0];
    }
  }

  processRequestedDataForRendering(designationName:string,data:any){
    this.designationNames.push(designationName);
    this.staffUnderDesignation = data;
    this.activeTab = designationName;
  }

  getKeysFromJson(data:any){
    return <[]>Object.keys(data);
  }
  getValuesFromJson(data:any){
    return <[]>Object.values(data);
  }

  getTitleFromType(type:string){

    var ans='';

    type.split(/(?=[A-Z])/).forEach(f=>{
      ans += f.charAt(0).toUpperCase()+f.slice(1) +' ';
      }
    )

    return ans;
  }
}

