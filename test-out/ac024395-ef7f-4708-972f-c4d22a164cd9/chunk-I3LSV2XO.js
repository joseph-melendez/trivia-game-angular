import {
  Component,
  Input,
  __decorate,
  init_core,
  init_tslib_es6,
  input
} from "./chunk-XZZCAJUH.js";
import {
  __esm
} from "./chunk-HBW54YOI.js";

// angular:jit:template:src\app\component\questionxofx\questionxofx.html
var questionxofx_default;
var init_questionxofx = __esm({
  "angular:jit:template:src\\app\\component\\questionxofx\\questionxofx.html"() {
    questionxofx_default = '<div class="questionXofX">\r\n    <b>Question {{questionNumber()}}/{{totalQuestions()}}</b>\r\n</div>';
  }
});

// angular:jit:style:src\app\component\questionxofx\questionxofx.scss
var questionxofx_default2;
var init_questionxofx2 = __esm({
  "angular:jit:style:src\\app\\component\\questionxofx\\questionxofx.scss"() {
    questionxofx_default2 = "/* src/app/component/questionxofx/questionxofx.scss */\n.questionXofX {\n  font-size: 28px;\n  margin: 10px;\n}\n/*# sourceMappingURL=questionxofx.css.map */\n";
  }
});

// src/app/component/questionxofx/questionxofx.ts
var Questionxofx;
var init_questionxofx3 = __esm({
  "src/app/component/questionxofx/questionxofx.ts"() {
    "use strict";
    init_tslib_es6();
    init_questionxofx();
    init_questionxofx2();
    init_core();
    init_core();
    Questionxofx = class Questionxofx2 {
      questionNumber = input();
      totalQuestions = input();
      static propDecorators = {
        questionNumber: [{ type: Input, args: [{ isSignal: true, alias: "questionNumber", required: false, transform: void 0 }] }],
        totalQuestions: [{ type: Input, args: [{ isSignal: true, alias: "totalQuestions", required: false, transform: void 0 }] }]
      };
    };
    Questionxofx = __decorate([
      Component({
        selector: "app-questionxofx",
        imports: [],
        template: questionxofx_default,
        styles: [questionxofx_default2]
      })
    ], Questionxofx);
  }
});

export {
  Questionxofx,
  init_questionxofx3 as init_questionxofx
};
//# sourceMappingURL=chunk-I3LSV2XO.js.map
