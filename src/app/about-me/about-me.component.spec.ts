import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { instance, mock, when } from 'ts-mockito';

import { AboutMeComponent } from './about-me.component';
import { SuiModule } from 'ng2-semantic-ui';
import { JsonService } from '../json.service';
import { Observable } from 'rxjs';

describe('AboutMeComponent', () => {
  let component: AboutMeComponent;
  let fixture: ComponentFixture<AboutMeComponent>;
  let mockedJsonService: JsonService;

  beforeEach(async(() => {
    mockedJsonService = mock(JsonService);
    when(mockedJsonService.getJSON('../../assets/data/profile.json')).thenReturn(new Observable());
    TestBed.configureTestingModule({
      declarations: [AboutMeComponent],
      imports: [SuiModule],
      providers: [{
        provide: JsonService, useValue: instance(mockedJsonService)
      }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
