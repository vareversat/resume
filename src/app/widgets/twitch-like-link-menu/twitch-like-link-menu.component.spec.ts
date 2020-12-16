import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchLikeLinkMenuComponent } from './twitch-like-link-menu.component';

describe('TwitchLikeLinkMenuComponent', () => {
  let component: TwitchLikeLinkMenuComponent;
  let fixture: ComponentFixture<TwitchLikeLinkMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitchLikeLinkMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitchLikeLinkMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
