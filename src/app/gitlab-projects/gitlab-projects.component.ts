import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import {
  TransitionController,
  Transition,
  TransitionDirection,
} from "ng2-semantic-ui";
import * as moment from "moment";
import * as _ from "lodash";

@Component({
  selector: 'app-gitlab-projects',
  templateUrl: './gitlab-projects.component.html',
  styleUrls: ['./gitlab-projects.component.less']
})
export class GitLabProjectsComponent implements OnInit {
public transitionController = new TransitionController();
  public projects: any;
  public areProjectsLoaded = false;
  private user = "vareversat";
  private orderBy = "name";
  public errorMessage: string = "";
  private pageSize = 5;
  private projectCount: number;
  public layout: any[] = [];
  private currentPage = 1;

  constructor(private apiService: ApiService) {}

  async getProjects(page: number) {
    await this.apiService
      .getOnUrl(
        "https://gitlab.dev-o-sud.fr/api/v4/projects" +
          "?order_by=" +
          this.orderBy +
          "&sort=asc&page=" +
          page +
          "&per_page=" +
          this.pageSize
      )
      .subscribe(
        (projects) => {
          this.projects = projects;
          for (const project of this.projects) {
            this.getLanguages(project);
            this.getUsersOfProject(project);
          }
          this.animate();
          this.areProjectsLoaded = true;
        },
        (error) => {
          //Error callback
          this.errorMessage = '😔 ' + error + ' 😔';
          this.areProjectsLoaded = true;

          //throw error;   //You can also throw the error to a global error handler
        }
      );
  }

  async getLanguages(project: any) {
    await this.apiService
      .getOnUrl(
        "https://gitlab.dev-o-sud.fr/api/v4/projects" +
          "/" +
          project.id +
          "/languages"
      )
      .subscribe((languages) => {
        _.set(project, "languages", this.getLanguagesDistribution(languages));
      });
  }

  getLanguagesDistribution(languages: any) {
    const dists = [];
    const langs = _.keys(languages);
    const values = _.values(languages);
    for (let index = 0; index < langs.length; index++) {
      dists.push({
        language: langs[index],
        distribution: values[index],
      });
    }
    return dists;
  }

  async getProjectsCount() {
    await this.apiService
      .getOnUrl("https://gitlab.dev-o-sud.fr/api/v4/projects")
      .subscribe((user: any) => {
        this.projectCount = user.public_repos;
        this.getLayout();
      });
  }

  async getUsersOfProject(project: any) {
    await this.apiService
      .getOnUrl(
        "https://gitlab.dev-o-sud.fr/api/v4/projects" +
          "/" +
          project.id +
          "/users"
      )
      .subscribe((users) => {
        _.set(project, "users", users);
      });
  }

  formatDate(date: string) {
    return moment(date).format(moment.localeData().longDateFormat("L"));
  }

  getLayout() {
    let quotient = Math.floor(this.projectCount / this.pageSize);
    const remainder = this.projectCount % this.pageSize;
    if (remainder !== 0) {
      quotient += 1;
    }
    for (let index = 0; index < quotient; index++) {
      this.layout.push(Array(this.pageSize).fill(0));
    }
  }

  public animate(transitionName: string = "fade up") {
    this.transitionController.animate(
      new Transition(transitionName, 900, TransitionDirection.In)
    );
  }

  setPage(position: number) {
    this.areProjectsLoaded = false;
    this.currentPage = position;
    this.getProjects(position);
  }

  ngOnInit() {
    this.getProjects(1);
    this.getProjectsCount();
  }

}
