import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {
  TransitionController,
  Transition,
  TransitionDirection
} from 'ng2-semantic-ui';
import * as moment from 'moment';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less']
})
export class ProjectsComponent implements OnInit {
  public transitionController = new TransitionController();
  public projects: any;
  public areProjectsLoaded = false;
  private user = 'vareversat';
  private sortBy = 'name';
  private pageSize = 5;
  private projectCount: number;
  public layout: any[] = [];
  private currentPage = 1;

  constructor(private apiService: ApiService) {
    this.apiService = apiService;
  }

  getProjectsCount() {
    this.apiService
      .getOnUrl('https://api.github.com/users/' + this.user)
      .subscribe((user: any) => {
        this.projectCount = user.public_repos;
        this.getLayout();
      });
  }

  getProjects(page: number): void {
    this.apiService
      .getOnUrl(
        'https://api.github.com/users/' +
          this.user +
          '/repos?sort=' +
          this.sortBy +
          '&order=desc&page=' +
          page +
          '&per_page=' +
          this.pageSize
      )
      .subscribe(projects => {
        this.projects = projects;
        this.animate();
        this.areProjectsLoaded = true;
      });
  }

  formatDate(date: string) {
    return moment(date).format(moment.localeData().longDateFormat('L'));
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

  public animate(transitionName: string = 'fade up') {
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
