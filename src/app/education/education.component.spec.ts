import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { instance, mock, when } from 'ts-mockito';

import { EducationComponent } from './education.component';
import { SuiModule } from 'ng2-semantic-ui';
import { JsonService } from '../json.service';
import { Observable } from 'rxjs';

describe('EducationComponent', () => {
  let component: EducationComponent;
  let fixture: ComponentFixture<EducationComponent>;
  let mockedJsonService: JsonService;

  beforeEach(async(() => {
    mockedJsonService = mock(JsonService);
    when(mockedJsonService.getJSON('../../assets/data/education.json')).thenReturn(new Observable());
    TestBed.configureTestingModule({
      declarations: [EducationComponent],
      imports: [SuiModule],
      providers: [{
        provide: JsonService, useValue: instance(mockedJsonService)
      }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
