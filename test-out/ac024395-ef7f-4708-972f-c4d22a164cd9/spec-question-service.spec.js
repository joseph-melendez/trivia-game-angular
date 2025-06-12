import {
  QuestionService,
  init_question_service,
  require_dist
} from "./chunk-QLTOY5HE.js";
import "./chunk-IACMKQA6.js";
import {
  HttpClient,
  init_http
} from "./chunk-IW42OL35.js";
import "./chunk-SERIX7TB.js";
import "./chunk-DVMMIR5O.js";
import {
  TestBed,
  init_testing
} from "./chunk-XZZCAJUH.js";
import {
  __toESM
} from "./chunk-HBW54YOI.js";

// src/app/services/question-service.spec.ts
init_testing();
init_question_service();
init_http();
var import_jasmine_auto_spies = __toESM(require_dist());
describe("QuestionService", () => {
  let service;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        QuestionService,
        { provide: HttpClient, useValue: (0, import_jasmine_auto_spies.createSpyFromClass)(HttpClient) }
      ]
    });
    service = TestBed.inject(QuestionService);
  });
  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
//# sourceMappingURL=spec-question-service.spec.js.map
