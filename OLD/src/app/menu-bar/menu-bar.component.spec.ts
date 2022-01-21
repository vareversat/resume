import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MenuBarComponent } from './menu-bar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MenuBarComponent', () => {
  let component: MenuBarComponent;
  let fixture: ComponentFixture<MenuBarComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MenuBarComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
