import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';
import {
  TransitionController,
  Transition,
  TransitionDirection
} from 'ng2-semantic-ui';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less']
})
export class SkillsComponent implements OnInit {
  public skills: any[];
  public transitionController = new TransitionController();

  constructor(private jsonService: JsonService) {}

  public animate(transitionName: string = 'scale') {
    this.transitionController.animate(
      new Transition(transitionName, 900, TransitionDirection.In)
    );
  }

  getSkills() {
    this.jsonService
      .getJSON('../../assets/data/skills.json')
      .subscribe(data => {
        this.skills = data;
      });
  }

  ngOnInit() {
    this.animate();
    this.getSkills();
  }
}
