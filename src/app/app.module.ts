import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WhatsappServiceService } from './whatsapp-service.service'; // Import your service
import { register } from 'swiper/element/bundle';
import { CertificationsComponent } from './certifications/certifications.component';
register();

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent,
    ProjectsComponent,
    ContactUsComponent,
    CertificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [WhatsappServiceService],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
