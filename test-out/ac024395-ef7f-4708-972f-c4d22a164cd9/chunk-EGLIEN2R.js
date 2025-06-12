import {
  DomSanitizer,
  init_platform_browser
} from "./chunk-2EYSG5KA.js";
import {
  Component,
  Input,
  Output,
  __decorate,
  init_core,
  init_tslib_es6,
  inject,
  input,
  output
} from "./chunk-XZZCAJUH.js";
import {
  __esm
} from "./chunk-HBW54YOI.js";

// angular:jit:template:src\app\component\answer\answer.html
var answer_default;
var init_answer = __esm({
  "angular:jit:template:src\\app\\component\\answer\\answer.html"() {
    answer_default = '<li class={{answerFormatting()}}>\r\n    <button\r\n        class="button-link"\r\n        [innerHTML]="sanitizedPrompt"\r\n        (click)="answerClicked(prompt())"\r\n        (keypress)="answerClicked(prompt())"\r\n    >\r\n    </button>\r\n</li>';
  }
});

// angular:jit:style:src\app\component\answer\answer.scss
var answer_default2;
var init_answer2 = __esm({
  "angular:jit:style:src\\app\\component\\answer\\answer.scss"() {
    answer_default2 = "/* src/app/component/answer/answer.scss */\n.answer {\n  margin-bottom: 5px;\n  cursor: pointer;\n  width: 95%;\n}\n.answer-disabled {\n  margin-bottom: 5px;\n  width: 95%;\n  cursor: auto;\n}\n.answer-wrong {\n  margin-bottom: 5px;\n  width: 95%;\n  cursor: auto;\n  background-color: #ff2400;\n}\n.answer:hover {\n  background-color: blanchedalmond;\n}\n.answer-selected {\n  background-color: lightgreen;\n}\n.button-link {\n  background: none !important;\n  border: none;\n  padding: 0 !important;\n  cursor: pointer;\n  text-align: left;\n  width: 100%;\n  font-weight: 400;\n}\n.button-link:active {\n  background-color: blanchedalmond;\n}\n/*# sourceMappingURL=answer.css.map */\n";
  }
});

// src/app/component/answer/answer.ts
var Answer;
var init_answer3 = __esm({
  "src/app/component/answer/answer.ts"() {
    "use strict";
    init_tslib_es6();
    init_answer();
    init_answer2();
    init_core();
    init_platform_browser();
    init_core();
    Answer = class Answer2 {
      sanitizer = inject(DomSanitizer);
      prompt = input.required();
      answerNumber = input.required();
      answer = input.required();
      correctAnswer = input.required();
      wasAnswered = input.required();
      setAnswer = output();
      // For displaying HTML in the answer that was passed in
      sanitizedPrompt = "";
      ngOnInit() {
        this.sanitizedPrompt = this.sanitizer.bypassSecurityTrustHtml(`${this.answerNumber()}. ${this.prompt()}`);
      }
      answerClicked(clickedPrompt) {
        if (!this.wasAnswered()) {
          this.setAnswer.emit(clickedPrompt);
        }
      }
      answerFormatting() {
        const start = this.wasAnswered() ? "answer-disabled " : "answer ";
        const selected = this.prompt() === this.answer() ? "answer-selected" : "";
        const wrongAnswer = this.wasAnswered() && this.correctAnswer() !== this.answer() && this.prompt() === this.correctAnswer() ? "answer-wrong" : "";
        return start + selected + wrongAnswer;
      }
      static propDecorators = {
        prompt: [{ type: Input, args: [{ isSignal: true, alias: "prompt", required: true, transform: void 0 }] }],
        answerNumber: [{ type: Input, args: [{ isSignal: true, alias: "answerNumber", required: true, transform: void 0 }] }],
        answer: [{ type: Input, args: [{ isSignal: true, alias: "answer", required: true, transform: void 0 }] }],
        correctAnswer: [{ type: Input, args: [{ isSignal: true, alias: "correctAnswer", required: true, transform: void 0 }] }],
        wasAnswered: [{ type: Input, args: [{ isSignal: true, alias: "wasAnswered", required: true, transform: void 0 }] }],
        setAnswer: [{ type: Output, args: ["setAnswer"] }]
      };
    };
    Answer = __decorate([
      Component({
        selector: "app-answer",
        imports: [],
        template: answer_default,
        styles: [answer_default2]
      })
    ], Answer);
  }
});

export {
  Answer,
  init_answer3 as init_answer
};
//# sourceMappingURL=chunk-EGLIEN2R.js.map
