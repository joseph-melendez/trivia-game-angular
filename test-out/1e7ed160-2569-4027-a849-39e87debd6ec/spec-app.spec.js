import {
  RouterOutlet,
  init_router
} from "./chunk-45NHYRQS.js";
import "./chunk-2EYSG5KA.js";
import "./chunk-5DSVAS4H.js";
import "./chunk-IW42OL35.js";
import "./chunk-SERIX7TB.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-XZZCAJUH.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-HBW54YOI.js";

// src/app/app.ts
var App;
var init_app = __esm({
  "src/app/app.ts"() {
    "use strict";
    init_tslib_es6();
    init_core();
    init_router();
    App = class App2 {
      title = "Trivia Game";
    };
    App = __decorate([
      Component({
        selector: "app-root",
        imports: [RouterOutlet],
        template: `
    <div class="app-size">
      <h1>{{title}}</h1>

      <router-outlet />
    </div>
  `
      })
    ], App);
  }
});

// src/app/app.spec.ts
var require_app_spec = __commonJS({
  "src/app/app.spec.ts"(exports) {
    init_testing();
    init_app();
    describe("App", () => {
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [App]
        }).compileComponents();
      }));
      it("should create the app", () => {
        const fixture = TestBed.createComponent(App);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
      });
      it("should render title", () => {
        const fixture = TestBed.createComponent(App);
        fixture.detectChanges();
        const compiled = fixture.nativeElement;
        expect(compiled.querySelector("h1")?.textContent).toContain("Trivia Game");
      });
    });
  }
});
export default require_app_spec();
//# sourceMappingURL=spec-app.spec.js.map
