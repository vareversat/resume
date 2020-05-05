import { Component, OnInit } from "@angular/core";
import { JsonService } from "../json.service";
import {
  TransitionController,
  Transition,
  TransitionDirection,
} from "ng2-semantic-ui";
import * as _ from 'lodash';

@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.less"],
})
export class AboutMeComponent implements OnInit {
  public imageTransition = new TransitionController();
  public buttonsTransition = new TransitionController();
  public profile: any = null;

  constructor(private jsonService: JsonService) {
    this.jsonService
      .getJSON("../../assets/data/profile.json")
      .subscribe((data) => {
        this.profile = data;
      });
  }

  public getLastName() {
    if (this.profile !== null) {
      return this.profile.last_name;
    }
  }

  public getFirstName() {
    if (this.profile !== null) {
      return this.profile.first_name;
    }
  }

  public getAge() {
    if (this.profile !== null) {
      return this.profile.age;
    }
  }

  public getBio() {
    if (this.profile !== null) {
      return this.profile.bio
    }
  }

  public getLanguages() {
    var languages = " | ";
    if (this.profile !== null) {
      for (const language of this.profile.languages) {
        languages += language.lang + " (" + language.level + ")" + " | ";
      }
      return languages;
    }
  }

  public animate() {
    this.imageTransition.animate(
      new Transition("fade down", 900, TransitionDirection.In)
    );
    this.buttonsTransition.animate(
      new Transition("fade left", 900, TransitionDirection.In)
    );
  }

  public goToURL(url: string) {
    window.open(url, "_blank");
  }

  ngOnInit() {
    this.animate();
  }
}
