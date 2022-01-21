import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { instance, mock, when } from 'ts-mockito';

import { SkillsComponent } from './skills.component';
import { SuiModule } from 'ng2-semantic-ui';
import { JsonService } from '../json.service';
import { Observable } from 'rxjs';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;
  let mockedJsonService: JsonService;

  beforeEach(waitForAsync(() => {
    mockedJsonService = mock(JsonService);
    when(mockedJsonService.getJSON('../../assets/data/skills.json')).thenReturn(new Observable());
    TestBed.configureTestingModule({
      declarations: [SkillsComponent],
      imports: [SuiModule],
      providers: [{
        provide: JsonService, useValue: instance(mockedJsonService)
      }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
