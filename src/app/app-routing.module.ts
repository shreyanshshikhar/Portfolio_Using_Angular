import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProjectsComponent } from './projects/projects.component';
import { CertificationsComponent } from './certifications/certifications.component';

const routes: Routes = [{path:'',component:HomeComponent},{path:'about',component:AboutComponent},{path:'skills',component:SkillsComponent},{path:'education',component:EducationComponent},{path:'projects',component:ProjectsComponent},{path:'contact',component:ContactUsComponent},{path:'certifications',component:CertificationsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
