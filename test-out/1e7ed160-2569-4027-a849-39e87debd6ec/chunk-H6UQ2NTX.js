import {
  Answer,
  init_answer
} from "./chunk-EGLIEN2R.js";
import {
  Component,
  Input,
  Output,
  __decorate,
  init_core,
  init_tslib_es6,
  input,
  output
} from "./chunk-XZZCAJUH.js";
import {
  __esm
} from "./chunk-HBW54YOI.js";

// angular:jit:template:src\app\component\answers\answers.html
var answers_default;
var init_answers = __esm({
  "angular:jit:template:src\\app\\component\\answers\\answers.html"() {
    answers_default = '<div class=\'align-left\'>\r\n    <ol class=\'ol-answers\'>\r\n        @for (prompt of question().options; let index = $index; track `${question().number}-${prompt}`) {\r\n            <app-answer\r\n                [prompt]="prompt"\r\n                [answerNumber]="index + 1"\r\n                [answer]="answer()"\r\n                [correctAnswer]="question().answer"\r\n                [wasAnswered]="wasAnswered()"\r\n                (setAnswer)="updateAnswer($event)"\r\n            />\r\n        }\r\n    </ol>\r\n</div>\r\n';
  }
});

// angular:jit:style:src\app\component\answers\answers.scss
var answers_default2;
var init_answers2 = __esm({
  "angular:jit:style:src\\app\\component\\answers\\answers.scss"() {
    answers_default2 = "/* src/app/component/answers/answers.scss */\n.align-left {\n  text-align: left;\n}\n.ol-answers {\n  margin-left: -5px;\n  list-style: none;\n  font-size: 18px;\n}\n/*# sourceMappingURL=answers.css.map */\n";
  }
});

// src/app/component/answers/answers.ts
var Answers;
var init_answers3 = __esm({
  "src/app/component/answers/answers.ts"() {
    "use strict";
    init_tslib_es6();
    init_answers();
    init_answers2();
    init_core();
    init_answer();
    init_core();
    Answers = class Answers2 {
      question = input.required();
      answer = input.required();
      wasAnswered = input.required();
      setAnswer = output();
      updateAnswer(answer) {
        this.setAnswer.emit(answer);
      }
      static propDecorators = {
        question: [{ type: Input, args: [{ isSignal: true, alias: "question", required: true, transform: void 0 }] }],
        answer: [{ type: Input, args: [{ isSignal: true, alias: "answer", required: true, transform: void 0 }] }],
        wasAnswered: [{ type: Input, args: [{ isSignal: true, alias: "wasAnswered", required: true, transform: void 0 }] }],
        setAnswer: [{ type: Output, args: ["setAnswer"] }]
      };
    };
    Answers = __decorate([
      Component({
        selector: "app-answers",
        imports: [Answer],
        template: answers_default,
        styles: [answers_default2]
      })
    ], Answers);
  }
});

export {
  Answers,
  init_answers3 as init_answers
};
//# sourceMappingURL=chunk-H6UQ2NTX.js.map
