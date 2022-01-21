import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-project-widget",
  templateUrl: "./project-widget.component.html",
  styleUrls: ["./project-widget.component.less"],
})
export class ProjectWidgetComponent implements OnInit {
  @Input() project: any;

  constructor() {}

  ngOnInit(): void {}
}
