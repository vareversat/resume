import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { instance, mock, when } from 'ts-mockito';

import { ProjectsComponent } from './projects.component';
import { SuiModule } from 'ng2-semantic-ui';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

describe('GitHubProjectsComponent', () => {
  let component: GitHubProjectsComponent;
  let fixture: ComponentFixture<GitHubProjectsComponent>;
  let mockedApiService: ApiService;

  beforeEach(async(() => {
    mockedApiService = mock(ApiService);
    when(
      mockedApiService.getOnUrl('https://api.github.com/users/vareversat')
    ).thenReturn(new Observable());
    when(
      mockedApiService.getOnUrl('https://api.github.com/users/vareversat/repos?sort=name&order=desc&page=1&per_page=5')
    ).thenReturn(new Observable());
    TestBed.configureTestingModule({
      declarations: [ProjectsComponent],
      imports: [SuiModule],
      providers: [
        {
          provide: ApiService,
          useValue: instance(mockedApiService)
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
