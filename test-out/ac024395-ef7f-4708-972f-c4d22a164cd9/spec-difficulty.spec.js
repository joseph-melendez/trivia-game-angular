import {
  Difficulty,
  init_difficulty
} from "./chunk-FNFSP2UR.js";
import "./chunk-DVMMIR5O.js";
import {
  TestBed,
  init_testing
} from "./chunk-XZZCAJUH.js";
import {
  __async,
  __commonJS
} from "./chunk-HBW54YOI.js";

// src/app/component/difficulty/difficulty.spec.ts
var require_difficulty_spec = __commonJS({
  "src/app/component/difficulty/difficulty.spec.ts"(exports) {
    init_testing();
    init_difficulty();
    describe("Difficulty", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Difficulty]
        }).compileComponents();
        fixture = TestBed.createComponent(Difficulty);
        component = fixture.componentInstance;
        fixture.componentRef.setInput("difficulty", "medium");
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_difficulty_spec();
//# sourceMappingURL=spec-difficulty.spec.js.map
