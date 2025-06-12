import { Component, inject, input, OnChanges, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-question',
  imports: [],
  templateUrl: './question.html',
  styleUrl: './question.scss'
})
export class Question implements OnChanges {
  sanitizer = inject(DomSanitizer);
  question = input.required<string>();
  sanitizedQuestion = signal<SafeHtml>('');

  ngOnChanges() {
    this.sanitizedQuestion.set(this.sanitizer.bypassSecurityTrustHtml(this.question()));
  }
}
