import {
  Questionxofx,
  init_questionxofx
} from "./chunk-I3LSV2XO.js";
import {
  TestBed,
  init_testing
} from "./chunk-XZZCAJUH.js";
import {
  __async,
  __commonJS
} from "./chunk-HBW54YOI.js";

// src/app/component/questionxofx/questionxofx.spec.ts
var require_questionxofx_spec = __commonJS({
  "src/app/component/questionxofx/questionxofx.spec.ts"(exports) {
    init_testing();
    init_questionxofx();
    describe("Questionxofx", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Questionxofx]
        }).compileComponents();
        fixture = TestBed.createComponent(Questionxofx);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_questionxofx_spec();
//# sourceMappingURL=spec-questionxofx.spec.js.map
