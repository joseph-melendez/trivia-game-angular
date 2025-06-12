import { Component, inject, OnInit, signal } from '@angular/core';
import { Difficulty as DifficultyType } from '../types/Difficulty';
import { ActivatedRoute, Router } from '@angular/router';
import { QUESTIONS_MAX, QUESTIONS_MIN } from '../types/Constants';
import { getFormattedQuestions, QuestionService } from '../services/question-service';
import { catchError } from 'rxjs';
import { Question as QuestionType } from '../types/Question';
import { Questionxofx } from "../component/questionxofx/questionxofx";
import { Categoryanddifficulty } from '../component/categoryanddifficulty/categoryanddifficulty';
import { Question } from '../component/question/question';
import { Answers } from "../component/answers/answers";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-play',
  imports: [Questionxofx, Categoryanddifficulty, Question, Answers],
  templateUrl: './play.html',
  styleUrl: './play.scss'
})
export class Play implements OnInit {
  router = inject(Router);
  route = inject(ActivatedRoute);
  sanitizer = inject(DomSanitizer);
  
  questionService = inject(QuestionService);
  questions = signal<QuestionType[]>([]);
  questionIndex = signal<number>(0);
  wasAnswered = signal<boolean>(false);
  answer = signal<string>('');
  isCorrect = signal<boolean>(false);
  correctAnswerCount = signal<number>(0);
  sanitizedAnswer = signal<SafeHtml>('');
  question = signal<QuestionType>({} as QuestionType);

  ngOnInit(): void {
    // Get the requested route value...
    const numberOfQuestions = Number(this.route.snapshot.paramMap.get('questions'));
    let difficulty = DifficultyType.any;
    
    // And query parameters
    this.route.queryParams.subscribe(params => {
      difficulty = params['difficulty'];
    });

    // If a proper number wasn't passed into the app, return to the start page
    if (isNaN(numberOfQuestions) || numberOfQuestions == null || numberOfQuestions < QUESTIONS_MIN || numberOfQuestions > QUESTIONS_MAX) {
      this.router.navigate(['/']);
    }

    // Retrieve the questions
    this.questionService.getQuestions(numberOfQuestions, difficulty as DifficultyType)
      .pipe(
        catchError((err) => {
          console.error(err);
          throw err;
        })
      )
      .subscribe((rawQuestions) => {
        // Take the RawQuestions reponse and transform it to our internal format
        const formattedQuestions = getFormattedQuestions(rawQuestions)
        this.questions.set(formattedQuestions);
        this.question.set(formattedQuestions[0]);
      });
  }

  setAnswer(answer: string) {
    this.answer.set(answer);
  }

  onClick() {
    console.log("joe joe joe joe joe", this.question().number, this.wasAnswered());

    if (this.wasAnswered()) {
      const nextQuestionNumber = this.questionIndex() + 1;

      this.questionIndex.set(nextQuestionNumber);
      this.question.set((nextQuestionNumber < this.questions().length) ? this.questions()[nextQuestionNumber] : {} as QuestionType);
      this.wasAnswered.set(false);
      this.answer.set('');
    } else {
      this.wasAnswered.set(true);
      this.isCorrect.set(this.answer() == this.question().answer);

      if (this.isCorrect()) {
        this.correctAnswerCount.set(this.correctAnswerCount() + 1);
      } else {
        this.sanitizedAnswer.set(this.sanitizer.bypassSecurityTrustHtml(this.question().answer));
      }
    }
  }

  buttonName() {
    return (this.wasAnswered()) ? "Next Question" : "Answer";
  }

  playAgain() {
    this.router.navigate(['']);
  }
}
