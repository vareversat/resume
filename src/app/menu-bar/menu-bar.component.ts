import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as _ from "lodash";

@Component({
  selector: "app-menu-bar",
  templateUrl: "./menu-bar.component.html",
  styleUrls: ["./menu-bar.component.less"],
})
export class MenuBarComponent implements OnInit {
  public show = false;
  constructor(private router: Router) {
    this.router = router;
  }

  get selectedPage() {
    if (!_.isUndefined(this.router.url)) {
      return this.router.url.replace("/", "");
    }
  }

  showMenu() {
    this.show = true;
  }

  hideMenu() {
    this.show = false;
  }

  ngOnInit() {}
}
