import { Component, input } from '@angular/core';

@Component({
  selector: 'app-questionxofx',
  imports: [],
  templateUrl: './questionxofx.html',
  styleUrl: './questionxofx.scss'
})
export class Questionxofx {
  questionNumber = input<number>();
  totalQuestions = input<number>();
}
