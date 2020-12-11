import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import {
  TransitionController,
  Transition,
  TransitionDirection,
} from "ng2-semantic-ui";
import * as moment from "moment";
import * as _ from "lodash";

@Component({
  selector: "app-projects",
  templateUrl: "./github-projects.component.html",
  styleUrls: ["./github-projects.component.less"],
})
export class GitHubProjectsComponent implements OnInit {
  public transitionController = new TransitionController();
  public projects: any;
  public areProjectsLoaded = false;
  private user = "UTBM-AGH-courses";
  private sortBy = "updated";
  public errorMessage: string = "";
  private pageSize = 5;
  private projectCount: number;
  public layout: any[] = [];
  private currentPage = 1;

  constructor(private apiService: ApiService) { }

  async getProjects(page: number) {
    await this.apiService
      .getOnUrl(
        "https://api.github.com/users/" +
        this.user +
        "/repos?sort=" +
        this.sortBy +
        "&order=desc&page=" +
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
            this.formatWebUrl(project);
          }
          this.animate();
          this.areProjectsLoaded = true;
        },
        (error) => {
          this.errorMessage = '😔 ' + error + ' 😔';
          this.areProjectsLoaded = true;
        }
      );
  }

  public setUser(v: string) {
    this.areProjectsLoaded = false;
    this.user = v;
    this.getProjects(1);
    this.getProjectsCount();
  }

  async getLanguages(project: any) {
    await this.apiService
      .getOnUrl(
        "https://api.github.com/repos/" +
        this.user +
        "/" +
        project.name +
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
    const total = _.sum(values);
    for (let index = 0; index < langs.length; index++) {
      dists.push({
        language: langs[index],
        distribution: _.round((values[index] * 100) / total, 2),
      });
    }
    return dists;
  }

  async getProjectsCount() {
    await this.apiService
      .getOnUrl("https://api.github.com/users/" + this.user)
      .subscribe((user: any) => {
        this.projectCount = user.public_repos;
        this.getLayout();
      });
  }

  formatWebUrl(project: any) {
    _.set(project, 'web_url', _.get(project, 'html_url', null))
  }

  async getUsersOfProject(project: any) {
    await this.apiService
      .getOnUrl(
        "https://api.github.com/repos/" +
        this.user +
        "/" +
        project.name +
        "/assignees"
      )
      .subscribe((users) => {
        _.set(project, "users", this.formatUsers(users));
      });
  }

  formatUsers(users: any) {
    for (let user of users) {
      _.set(user, 'username', _.get(user, 'login', null))
      _.set(user, 'web_url', _.get(user, 'html_url', null))
    }
    return users
  }

  formatDate(date: string) {
    return moment(date).format(moment.localeData().longDateFormat("L"));
  }

  getLayout() {
    this.layout = []
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
