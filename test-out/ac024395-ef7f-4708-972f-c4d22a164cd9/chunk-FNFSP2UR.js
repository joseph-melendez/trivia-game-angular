import {
  Difficulty,
  init_Difficulty
} from "./chunk-DVMMIR5O.js";
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

// angular:jit:template:src\app\component\difficulty\difficulty.html
var difficulty_default;
var init_difficulty = __esm({
  "angular:jit:template:src\\app\\component\\difficulty\\difficulty.html"() {
    difficulty_default = '<div [class]="formattedDifficulty(difficulty())">\r\n    {{difficulty()}}\r\n</div>\r\n';
  }
});

// angular:jit:style:src\app\component\difficulty\difficulty.scss
var difficulty_default2;
var init_difficulty2 = __esm({
  "angular:jit:style:src\\app\\component\\difficulty\\difficulty.scss"() {
    difficulty_default2 = "/* src/app/component/difficulty/difficulty.scss */\n.background-color-green {\n  background-color: green;\n}\n.background-color-orange {\n  background-color: orange;\n}\n.background-color-red {\n  background-color: red;\n}\n.color-white {\n  color: white;\n}\n.pill {\n  border: none;\n  padding: 10px 20px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  min-width: 65px;\n  margin: 4px 2px;\n  border-radius: 16px;\n}\n/*# sourceMappingURL=difficulty.css.map */\n";
  }
});

// src/app/component/difficulty/difficulty.ts
var Difficulty2;
var init_difficulty3 = __esm({
  "src/app/component/difficulty/difficulty.ts"() {
    "use strict";
    init_tslib_es6();
    init_difficulty();
    init_difficulty2();
    init_core();
    init_Difficulty();
    init_core();
    Difficulty2 = class Difficulty3 {
      difficulty = input(Difficulty.any);
      formattedDifficulty(difficulty) {
        let colors = "";
        if (difficulty === Difficulty.easy) {
          colors = "background-color-green color-white";
        } else if (difficulty === Difficulty.medium) {
          colors = "background-color-orange color-white";
        } else {
          colors = "background-color-red color-white";
        }
        return "pill " + colors;
      }
      static propDecorators = {
        difficulty: [{ type: Input, args: [{ isSignal: true, alias: "difficulty", required: false, transform: void 0 }] }]
      };
    };
    Difficulty2 = __decorate([
      Component({
        selector: "app-difficulty",
        imports: [],
        template: difficulty_default,
        styles: [difficulty_default2]
      })
    ], Difficulty2);
  }
});

export {
  Difficulty2 as Difficulty,
  init_difficulty3 as init_difficulty
};
//# sourceMappingURL=chunk-FNFSP2UR.js.map
