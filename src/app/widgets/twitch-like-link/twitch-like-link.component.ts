import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-twitch-like-link',
  templateUrl: './twitch-like-link.component.html',
  styleUrls: ['./twitch-like-link.component.less']
})
export class TwitchLikeLinkComponent implements OnInit {

  @Input() link: string;
  @Input() text: string;

  constructor() {}

  ngOnInit(): void {}

}
