import {Component, OnInit} from '@angular/core';
import {JsonService} from '../json.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.less']
})
export class SkillsComponent implements OnInit {
  public skills: any[];

  constructor(private jsonService: JsonService) {
    this.jsonService
      .getJSON('../../assets/data/skills.json')
      .subscribe(data => {
        this.skills = data;
      });
  }

  ngOnInit() {}
}
