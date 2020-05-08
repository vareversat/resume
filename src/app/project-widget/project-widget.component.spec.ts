import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectWidgetComponent } from './project-widget.component';

describe('ProjectWidgetComponent', () => {
  let component: ProjectWidgetComponent;
  let fixture: ComponentFixture<ProjectWidgetComponent>;
  let projectInput: {};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectWidgetComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
