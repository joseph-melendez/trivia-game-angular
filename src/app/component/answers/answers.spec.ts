import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Answers } from './answers';
import { Question } from '../../types/Question';

describe('Answers', () => {
  let component: Answers;
  let fixture: ComponentFixture<Answers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Answers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Answers);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('question', {} as Question);
    fixture.componentRef.setInput('answer', 'test answer');
    fixture.componentRef.setInput('wasAnswered', false);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
