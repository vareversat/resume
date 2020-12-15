import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitchLikeLinkComponent } from './twitch-like-link.component';

describe('TwitchLikeLinkComponent', () => {
  let component: TwitchLikeLinkComponent;
  let fixture: ComponentFixture<TwitchLikeLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwitchLikeLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitchLikeLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
