import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TriviaApi } from '../types/Constants';
import { Question } from '../types/Question';
import { QuestionTypes } from '../types/QuestionTypes';
import { Difficulty } from '../types/Difficulty';
import { RawQuestions } from '../types/RawQuestions';
import { RawQuestion } from '../types/RawQuestion';

@Injectable({
  providedIn: 'root'
})

export class QuestionService {
  http = inject(HttpClient);

  getQuestions(numberOfQuestions: number, difficulty: Difficulty) {
    const baseUrl = `${TriviaApi}?amount=${numberOfQuestions}`;
    const urlToFetch = baseUrl + ((difficulty != null && difficulty != Difficulty.any) ? `&difficulty=${difficulty}` : '');

    return this.http.get<RawQuestions>(urlToFetch);
  }
}

export function getFormattedQuestions(rawQuestions: RawQuestions) {
  const questions: Question[] = [];

  rawQuestions.results.map((item: RawQuestion, index: number) => {
        const question: Question = {
            number: index + 1,
            category: item.category,
            difficulty: item.difficulty as Difficulty,
            type: item.type,
            question: item.question,
            answer: item.correct_answer,
            options: [...item.incorrect_answers, item.correct_answer]
        };

        if (question.type === QuestionTypes.boolean) {
            // Sort boolean types in reverse so true comes before false
            question.options.sort().reverse();
        } else {
            // Sort in default order
            question.options.sort();
        }

        questions.push(question);
    });

    return questions;
}
