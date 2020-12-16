import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';
import { GitHubProjectsComponent } from './github-projects/github-projects.component';
import { SkillsComponent } from './skills/skills.component';
import { SuiModule } from 'ng2-semantic-ui';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { WorkComponent } from './work/work.component';
import { JsonService } from './json.service';
import { ApiService } from './api.service';
import { ProjectWidgetComponent } from './widgets/project-widget/project-widget.component';
import { TwitchLikeLinkComponent } from './widgets/twitch-like-link/twitch-like-link.component';
import { TwitchLikeLinkMenuComponent } from './widgets/twitch-like-link-menu/twitch-like-link-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    EducationComponent,
    GitHubProjectsComponent,
    SkillsComponent,
    MenuBarComponent,
    WorkComponent,
    ProjectWidgetComponent,
    TwitchLikeLinkComponent,
    TwitchLikeLinkMenuComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, SuiModule],
  providers: [JsonService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
