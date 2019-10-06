import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';
import {
  TransitionController,
  Transition,
  TransitionDirection
} from 'ng2-semantic-ui';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.less']
})
export class EducationComponent implements OnInit {
  public educations: any[];
  public transitionController = new TransitionController();

  constructor(private jsonService: JsonService) {
    this.jsonService
      .getJSON('../../assets/data/education.json')
      .subscribe(data => {
        this.educations = data;
      });
  }

  public animate(transitionName: string = 'fade down') {
    this.transitionController.animate(
      new Transition(transitionName, 900, TransitionDirection.In)
    );
  }

  ngOnInit() {
    this.animate();
  }
}
