import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { instance, mock, when } from 'ts-mockito';

import { GitLabProjectsComponent } from './gitlab-projects.component';
import { SuiModule } from 'ng2-semantic-ui';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

describe('GitLabProjectsComponent', () => {
  let component: GitLabProjectsComponent;
  let fixture: ComponentFixture<GitLabProjectsComponent>;
  let mockedApiService: ApiService;

  beforeEach(async(() => {
    mockedApiService = mock(ApiService);
    when(
      mockedApiService.getOnUrl('https://gitlab.dev-o-sud.fr/api/v4/projects')
    ).thenReturn(new Observable());
    when(
      mockedApiService.getOnUrl('https://gitlab.dev-o-sud.fr/api/v4/projects?order_by=name&sort=asc&page=1&per_page=5')
    ).thenReturn(new Observable());
    TestBed.configureTestingModule({
      declarations: [ GitLabProjectsComponent ],
      imports: [SuiModule],
      providers: [
        {
          provide: ApiService,
          useValue: instance(mockedApiService)
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitLabProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
