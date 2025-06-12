import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Difficulty as DifficultyType } from '../types/Difficulty';
import { Router } from '@angular/router';
import { QUESTIONS_MIN, QUESTIONS_MAX } from '../types/Constants';

@Component({
  selector: 'app-start',
  imports: [ReactiveFormsModule],
  templateUrl: './start.html',
  styleUrl: './start.scss'
})

export class Start {
  router = inject(Router);

  difficultyEnum = DifficultyType;
  questionsMin = QUESTIONS_MIN;
  questionsMax = QUESTIONS_MAX;

  startForm = new FormGroup({
    numberOfQuestions: new FormControl(10, Validators.required),
    difficulty: new FormControl(this.difficultyEnum.any, Validators.required)
  });

  handleSubmit() {
    this.router.navigate([`/play/${this.startForm.value.numberOfQuestions}`], { queryParams: { difficulty: this.startForm.value.difficulty } });
  }
}
