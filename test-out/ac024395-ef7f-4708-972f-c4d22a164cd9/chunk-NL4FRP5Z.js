import {
  DomSanitizer,
  init_platform_browser
} from "./chunk-2EYSG5KA.js";
import {
  Difficulty,
  init_difficulty
} from "./chunk-FNFSP2UR.js";
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

// angular:jit:template:src\app\component\categoryanddifficulty\categoryanddifficulty.html
var categoryanddifficulty_default;
var init_categoryanddifficulty = __esm({
  "angular:jit:template:src\\app\\component\\categoryanddifficulty\\categoryanddifficulty.html"() {
    categoryanddifficulty_default = '<div class="flex-container">\r\n    <div class="category-difficulty-name question-font-size">\r\n        <b [innerHTML]="sanitizedCategory()"></b>\r\n    </div>\r\n    <div class="category-difficulty-pill">\r\n        <app-difficulty [difficulty]="difficulty()" />\r\n    </div>\r\n</div>';
  }
});

// angular:jit:style:src\app\component\categoryanddifficulty\categoryanddifficulty.scss
var categoryanddifficulty_default2;
var init_categoryanddifficulty2 = __esm({
  "angular:jit:style:src\\app\\component\\categoryanddifficulty\\categoryanddifficulty.scss"() {
    categoryanddifficulty_default2 = "/* src/app/component/categoryanddifficulty/categoryanddifficulty.scss */\n.question-font-size {\n  font-size: 24px;\n}\n/*# sourceMappingURL=categoryanddifficulty.css.map */\n";
  }
});

// src/app/component/categoryanddifficulty/categoryanddifficulty.ts
var Categoryanddifficulty;
var init_categoryanddifficulty3 = __esm({
  "src/app/component/categoryanddifficulty/categoryanddifficulty.ts"() {
    "use strict";
    init_tslib_es6();
    init_categoryanddifficulty();
    init_categoryanddifficulty2();
    init_core();
    init_difficulty();
    init_platform_browser();
    init_core();
    Categoryanddifficulty = class Categoryanddifficulty2 {
      sanitizer = inject(DomSanitizer);
      category = input.required();
      difficulty = input.required();
      sanitizedCategory = signal("");
      ngOnChanges() {
        this.sanitizedCategory.set(this.sanitizer.bypassSecurityTrustHtml(this.category()));
      }
      static propDecorators = {
        category: [{ type: Input, args: [{ isSignal: true, alias: "category", required: true, transform: void 0 }] }],
        difficulty: [{ type: Input, args: [{ isSignal: true, alias: "difficulty", required: true, transform: void 0 }] }]
      };
    };
    Categoryanddifficulty = __decorate([
      Component({
        selector: "app-categoryanddifficulty",
        imports: [Difficulty],
        template: categoryanddifficulty_default,
        styles: [categoryanddifficulty_default2]
      })
    ], Categoryanddifficulty);
  }
});

export {
  Categoryanddifficulty,
  init_categoryanddifficulty3 as init_categoryanddifficulty
};
//# sourceMappingURL=chunk-NL4FRP5Z.js.map
