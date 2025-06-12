import {
  Answers,
  init_answers
} from "./chunk-H6UQ2NTX.js";
import "./chunk-EGLIEN2R.js";
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

// src/app/component/answers/answers.spec.ts
var require_answers_spec = __commonJS({
  "src/app/component/answers/answers.spec.ts"(exports) {
    init_testing();
    init_answers();
    describe("Answers", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Answers]
        }).compileComponents();
        fixture = TestBed.createComponent(Answers);
        component = fixture.componentInstance;
        fixture.componentRef.setInput("question", {});
        fixture.componentRef.setInput("answer", "test answer");
        fixture.componentRef.setInput("wasAnswered", false);
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_answers_spec();
//# sourceMappingURL=spec-answers.spec.js.map
