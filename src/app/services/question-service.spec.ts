import { TestBed } from '@angular/core/testing';
import { QuestionService } from './question-service';
import { HttpClient } from '@angular/common/http';
import { createSpyFromClass } from 'jasmine-auto-spies';

describe('QuestionService', () => {
  // https://danielk.tech/home/how-to-test-angular-http-services
  let service: QuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
          providers: [
            QuestionService,
            { provide: HttpClient, useValue: createSpyFromClass(HttpClient) }
          ]
        });

    service = TestBed.inject(QuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
