import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people.component';
import { PeopleRoutingModule } from './people-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PeopleRoutingModule
  ],
  declarations: [PeopleComponent]
})
export class PeopleModule {}
