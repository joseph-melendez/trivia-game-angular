import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Answer } from './answer';

describe('Answer', () => {
  let component: Answer;
  let fixture: ComponentFixture<Answer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Answer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Answer);
    component = fixture.componentInstance;

    fixture.componentRef.setInput('prompt', 'answer prompt');
    fixture.componentRef.setInput('answerNumber', 1);
    fixture.componentRef.setInput('answer', 'test answer');
    fixture.componentRef.setInput('correctAnswer', 'test correct answer');
    fixture.componentRef.setInput('wasAnswered', false);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
