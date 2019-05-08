import {Component, OnInit} from '@angular/core';
import {JsonService} from '../json.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.less']
})
export class EducationComponent implements OnInit {
  private educations: any[];
  constructor(private jsonService: JsonService) {
    this.jsonService
      .getJSON('../../assets/data/education.json')
      .subscribe(data => {
        this.educations = data;
      });
  }

  ngOnInit() {}
}
