import { Component, inject, input, OnInit, output } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-answer',
  imports: [],
  templateUrl: './answer.html',
  styleUrl: './answer.scss'
})
export class Answer implements OnInit {
  sanitizer = inject(DomSanitizer);
  
  prompt = input.required<string>();
  answerNumber = input.required<number>();
  answer = input.required<string>();
  correctAnswer = input.required<string>();
  wasAnswered = input.required<boolean>();
  setAnswer = output<string>();

  // For displaying HTML in the answer that was passed in
  sanitizedPrompt: SafeHtml = "";

  ngOnInit(): void {
    this.sanitizedPrompt = this.sanitizer.bypassSecurityTrustHtml(`${this.answerNumber()}. ${this.prompt()}`);
  }

  answerClicked(clickedPrompt: string) {
    if (!this.wasAnswered()) {
      this.setAnswer.emit(clickedPrompt);
    }
  }

  answerFormatting(): string {
    const start = (this.wasAnswered()) ? 'answer-disabled ' : 'answer ';
    const selected = (this.prompt() === this.answer()) ? 'answer-selected' : '';
    const wrongAnswer = (this.wasAnswered() && this.correctAnswer() !== this.answer() && this.prompt() === this.correctAnswer()) ? 'answer-wrong' : '';

    return start + selected + wrongAnswer;
  }
}
