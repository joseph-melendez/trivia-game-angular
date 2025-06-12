import {
  Answer,
  init_answer
} from "./chunk-EGLIEN2R.js";
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

// src/app/component/answer/answer.spec.ts
var require_answer_spec = __commonJS({
  "src/app/component/answer/answer.spec.ts"(exports) {
    init_testing();
    init_answer();
    describe("Answer", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Answer]
        }).compileComponents();
        fixture = TestBed.createComponent(Answer);
        component = fixture.componentInstance;
        fixture.componentRef.setInput("prompt", "answer prompt");
        fixture.componentRef.setInput("answerNumber", 1);
        fixture.componentRef.setInput("answer", "test answer");
        fixture.componentRef.setInput("correctAnswer", "test correct answer");
        fixture.componentRef.setInput("wasAnswered", false);
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_answer_spec();
//# sourceMappingURL=spec-answer.spec.js.map
