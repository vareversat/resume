import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';
import {
  TransitionController,
  Transition,
  TransitionDirection
} from 'ng2-semantic-ui';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.less']
})
export class WorkComponent implements OnInit {
  public transitionController = new TransitionController();
  public works: any[];

  constructor(private jsonService: JsonService) {
    this.jsonService
    .getJSON('../../assets/data/works.json')
    .subscribe(data => {
      this.works = data;
    });
  }

  public animate(transitionName: string = 'slide left') {
    this.transitionController.animate(
      new Transition(transitionName, 900, TransitionDirection.In)
    );
  }

  ngOnInit() {
    this.animate();
  }

}
