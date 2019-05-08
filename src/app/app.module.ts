import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {EducationComponent} from './education/education.component';
import {ProjectsComponent} from './projects/projects.component';
import {SkillsComponent} from './skills/skills.component';
import {SuiModule} from 'ng2-semantic-ui';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    EducationComponent,
    ProjectsComponent,
    SkillsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, SuiModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
