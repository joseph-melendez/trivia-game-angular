import { Component, input, output } from '@angular/core';
import { Answer } from '../answer/answer';
import { Question } from '../../types/Question';

@Component({
  selector: 'app-answers',
  imports: [Answer],
  templateUrl: './answers.html',
  styleUrl: './answers.scss'
})

export class Answers {
  question = input.required<Question>();
  answer = input.required<string>();
  wasAnswered = input.required<boolean>();
  setAnswer = output<string>();

  updateAnswer(answer: string) {
    this.setAnswer.emit(answer);
  }
}
