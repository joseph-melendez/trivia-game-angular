import {
  DomSanitizer,
  init_platform_browser
} from "./chunk-2EYSG5KA.js";
import {
  Component,
  Input,
  __decorate,
  init_core,
  init_tslib_es6,
  inject,
  input,
  signal
} from "./chunk-XZZCAJUH.js";
import {
  __esm
} from "./chunk-HBW54YOI.js";

// angular:jit:template:src\app\component\question\question.html
var question_default;
var init_question = __esm({
  "angular:jit:template:src\\app\\component\\question\\question.html"() {
    question_default = '<p class="question-align" [innerHTML]="sanitizedQuestion()"></p>';
  }
});

// angular:jit:style:src\app\component\question\question.scss
var question_default2;
var init_question2 = __esm({
  "angular:jit:style:src\\app\\component\\question\\question.scss"() {
    question_default2 = "/* src/app/component/question/question.scss */\n.question-align {\n  text-align: left;\n}\n/*# sourceMappingURL=question.css.map */\n";
  }
});

// src/app/component/question/question.ts
var Question;
var init_question3 = __esm({
  "src/app/component/question/question.ts"() {
    "use strict";
    init_tslib_es6();
    init_question();
    init_question2();
    init_core();
    init_platform_browser();
    init_core();
    Question = class Question2 {
      sanitizer = inject(DomSanitizer);
      question = input.required();
      sanitizedQuestion = signal("");
      ngOnChanges() {
        this.sanitizedQuestion.set(this.sanitizer.bypassSecurityTrustHtml(this.question()));
      }
      static propDecorators = {
        question: [{ type: Input, args: [{ isSignal: true, alias: "question", required: true, transform: void 0 }] }]
      };
    };
    Question = __decorate([
      Component({
        selector: "app-question",
        imports: [],
        template: question_default,
        styles: [question_default2]
      })
    ], Question);
  }
});

export {
  Question,
  init_question3 as init_question
};
//# sourceMappingURL=chunk-5NZAIMEF.js.map
