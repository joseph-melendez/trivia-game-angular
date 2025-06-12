import {
  Categoryanddifficulty,
  init_categoryanddifficulty
} from "./chunk-NL4FRP5Z.js";
import "./chunk-2EYSG5KA.js";
import "./chunk-5DSVAS4H.js";
import "./chunk-IW42OL35.js";
import "./chunk-SERIX7TB.js";
import "./chunk-FNFSP2UR.js";
import "./chunk-DVMMIR5O.js";
import {
  TestBed,
  init_testing
} from "./chunk-XZZCAJUH.js";
import {
  __async,
  __commonJS
} from "./chunk-HBW54YOI.js";

// src/app/component/categoryanddifficulty/categoryanddifficulty.spec.ts
var require_categoryanddifficulty_spec = __commonJS({
  "src/app/component/categoryanddifficulty/categoryanddifficulty.spec.ts"(exports) {
    init_testing();
    init_categoryanddifficulty();
    describe("Categoryanddifficulty", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Categoryanddifficulty]
        }).compileComponents();
        fixture = TestBed.createComponent(Categoryanddifficulty);
        component = fixture.componentInstance;
        fixture.componentRef.setInput("category", "category name");
        fixture.componentRef.setInput("difficulty", "medium");
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_categoryanddifficulty_spec();
//# sourceMappingURL=spec-categoryanddifficulty.spec.js.map
