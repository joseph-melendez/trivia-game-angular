import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Play } from './play';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { QuestionService } from '../services/question-service';
import rawQuestionsJson from '../data/GetQuestionsResponse.json';

describe('Play', () => {
  let component: Play;
  let fixture: ComponentFixture<Play>;
  let httpSpy: Spy<HttpClient>;

  const activatedRouteMock = {
    snapshot: {
      paramMap: new Map([['questions', '10']])
    },
    queryParams: of({ difficulty: 'medium' }),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Play],
      providers: [
        QuestionService,
        { provide: HttpClient, useValue: createSpyFromClass(HttpClient) },
				{ provide: ActivatedRoute, useValue: activatedRouteMock },
			],
    })
    .compileComponents();

    fixture = TestBed.createComponent(Play);
    component = fixture.componentInstance;

    httpSpy = TestBed.inject(HttpClient) as Spy<HttpClient>;
    httpSpy.get.and.nextWith(rawQuestionsJson);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
