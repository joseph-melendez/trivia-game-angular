import {
  Question,
  init_question
} from "./chunk-5NZAIMEF.js";
import "./chunk-2EYSG5KA.js";
import "./chunk-5DSVAS4H.js";
import "./chunk-IW42OL35.js";
import "./chunk-SERIX7TB.js";
import {
  TestBed,
  init_testing
} from "./chunk-XZZCAJUH.js";
import {
  __async,
  __commonJS
} from "./chunk-HBW54YOI.js";

// src/app/component/question/question.spec.ts
var require_question_spec = __commonJS({
  "src/app/component/question/question.spec.ts"(exports) {
    init_testing();
    init_question();
    describe("Question", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Question]
        }).compileComponents();
        fixture = TestBed.createComponent(Question);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_question_spec();
//# sourceMappingURL=spec-question.spec.js.map
