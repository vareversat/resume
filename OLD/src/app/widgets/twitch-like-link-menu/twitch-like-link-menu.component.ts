import { Component, OnInit, Input} from "@angular/core";

@Component({
  selector: "app-twitch-like-link-menu",
  templateUrl: "./twitch-like-link-menu.component.html",
  styleUrls: ["./twitch-like-link-menu.component.less"],
})
export class TwitchLikeLinkMenuComponent implements OnInit {
  @Input() routerLink: string;
  @Input() text: string;
  @Input() style: string;
  @Input() icon: string;
  @Input() selected: boolean;


  constructor() {}

  ngOnInit(): void {}
}
