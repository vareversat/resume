import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EducationComponent} from './education/education.component';
import {GitHubProjectsComponent} from './github-projects/github-projects.component';
import {SkillsComponent} from './skills/skills.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {WorkComponent} from './work/work.component';

const routes: Routes = [
  {path: '', redirectTo: '/about-me', pathMatch: 'full'},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'education', component: EducationComponent},
  {path: 'github-projects', component: GitHubProjectsComponent},
  {path: 'skills', component: SkillsComponent},
  {path: 'work-experiences', component: WorkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
