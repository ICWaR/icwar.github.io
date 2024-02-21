import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { ContactUsComponent } from './views/contact-us/contact-us.component';
import { CarouselModule as pCarouselModule } from 'primeng/carousel';

import { CarouselModule } from 'ngx-bootstrap/carousel';


import { AboutUsComponent } from './views/about-us/about-us.component';
import { ResearchComponent } from './views/research/research.component';
import { CentresAndFacilitiesComponent } from './views/centres-and-facilities/centres-and-facilities.component';
import { SeminarsAndPublicationsComponent } from './views/seminars-and-publications/seminars-and-publications.component';
import { WorkshopsAndMeetingsComponent } from './views/workshops-and-meetings/workshops-and-meetings.component';
// import { MonsoonSchoolComponent } from './views/monsoon-school/monsoon-school.component';
import { GalleryComponent } from './views/gallery/gallery.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PublicationsComponent } from './views/publications/publications.component';
import { ResearchNewComponent } from './views/research-new/research-new.component';
import { ActivitiesAndEventsComponent } from './views/activities-and-events/activities-and-events.component';
import { ProgramsComponent } from './views/programs/programs.component';
import { StudentsCornerComponent } from './views/students-corner/students-corner.component';
import { TimelineComponent } from './views/timeline/timeline.component';
import { TestimonialsComponent } from './views/testimonials/testimonials.component';
import { OutreachComponent } from './views/outreach/outreach.component';
import { StudentsSeminarComponent } from './views/students-seminar/students-seminar.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    pCarouselModule,
    TabsModule
  ],
  declarations: [
    AppComponent,
    HomepageComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    AboutUsComponent,
    ResearchComponent,
    CentresAndFacilitiesComponent,
    SeminarsAndPublicationsComponent,
    WorkshopsAndMeetingsComponent,
    // MonsoonSchoolComponent,
    GalleryComponent,
    PublicationsComponent,
    ResearchNewComponent,
    ActivitiesAndEventsComponent,
    ProgramsComponent,
    StudentsCornerComponent,
    TimelineComponent,
    TestimonialsComponent,
    OutreachComponent,
    StudentsSeminarComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
