import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { anyString, instance, mock, when } from 'ts-mockito';

import { WorkComponent } from './work.component';
import { SuiModule } from 'ng2-semantic-ui';
import { JsonService } from '../json.service';
import { Observable } from 'rxjs';

describe('WorkComponent', () => {
  let component: WorkComponent;
  let fixture: ComponentFixture<WorkComponent>;
  let mockedJsonService: JsonService;

  beforeEach(async(() => {
    mockedJsonService = mock(JsonService);
    when(
      mockedJsonService.getJSON('../../assets/data/works.json')
    ).thenReturn(new Observable());
    TestBed.configureTestingModule({
      declarations: [WorkComponent],
      imports: [SuiModule],
      providers: [
        {
          provide: JsonService,
          useValue: instance(mockedJsonService)
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
