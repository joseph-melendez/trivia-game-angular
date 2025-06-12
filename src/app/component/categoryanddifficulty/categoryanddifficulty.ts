import { Component, inject, input, OnChanges, signal } from '@angular/core';
import { Difficulty as DifficultyType} from '../../types/Difficulty';
import { Difficulty } from "../difficulty/difficulty";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-categoryanddifficulty',
  imports: [Difficulty],
  templateUrl: './categoryanddifficulty.html',
  styleUrl: './categoryanddifficulty.scss',
})

export class Categoryanddifficulty implements OnChanges {
  sanitizer = inject(DomSanitizer);

  category = input.required<string>();
  difficulty  = input.required<DifficultyType>();
  sanitizedCategory = signal<SafeHtml>('');

  ngOnChanges() {
    this.sanitizedCategory.set(this.sanitizer.bypassSecurityTrustHtml(this.category()));
  }
}
