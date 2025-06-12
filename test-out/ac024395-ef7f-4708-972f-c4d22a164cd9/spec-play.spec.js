import {
  Question,
  init_question
} from "./chunk-5NZAIMEF.js";
import {
  Questionxofx,
  init_questionxofx
} from "./chunk-I3LSV2XO.js";
import {
  QuestionService,
  getFormattedQuestions,
  init_question_service,
  require_dist
} from "./chunk-QLTOY5HE.js";
import {
  ActivatedRoute,
  Router,
  init_router
} from "./chunk-45NHYRQS.js";
import {
  QUESTIONS_MAX,
  QUESTIONS_MIN,
  init_Constants
} from "./chunk-IACMKQA6.js";
import {
  Answers,
  init_answers
} from "./chunk-H6UQ2NTX.js";
import "./chunk-EGLIEN2R.js";
import {
  Categoryanddifficulty,
  init_categoryanddifficulty
} from "./chunk-NL4FRP5Z.js";
import {
  DomSanitizer,
  init_platform_browser
} from "./chunk-2EYSG5KA.js";
import "./chunk-5DSVAS4H.js";
import {
  HttpClient,
  init_http
} from "./chunk-IW42OL35.js";
import "./chunk-SERIX7TB.js";
import "./chunk-FNFSP2UR.js";
import {
  Difficulty,
  init_Difficulty
} from "./chunk-DVMMIR5O.js";
import {
  Component,
  TestBed,
  __decorate,
  catchError,
  init_core,
  init_esm,
  init_testing,
  init_tslib_es6,
  inject,
  of,
  signal
} from "./chunk-XZZCAJUH.js";
import {
  __async,
  __commonJS,
  __esm,
  __toESM
} from "./chunk-HBW54YOI.js";

// angular:jit:template:src\app\play\play.html
var play_default;
var init_play = __esm({
  "angular:jit:template:src\\app\\play\\play.html"() {
    play_default = '@if (!questions().length) {\r\n    <p>Loading...</p>\r\n} @else if (questionIndex() >= questions().length) {\r\n    <p>\r\n        You answered {{ correctAnswerCount() }} of {{ questions().length }} questions correctly.\r\n    </p>\r\n    <p>\r\n        <a\r\n            (click)="playAgain()"\r\n            (keypress)="playAgain()"\r\n            tabindex="0"\r\n        >\r\n            Play Again\r\n        </a>\r\n    </p>\r\n} @else {\r\n    <div>\r\n        <app-questionxofx [questionNumber]="question().number" [totalQuestions]="questions().length" />\r\n        <hr />\r\n        <app-categoryanddifficulty [category]="question().category" [difficulty]="question().difficulty" />\r\n        <br />\r\n        <app-question [question]="question().question" />\r\n        <app-answers\r\n            [question]="question()"\r\n            [answer]="answer()"\r\n            [wasAnswered]="wasAnswered()"\r\n            (setAnswer)="setAnswer($event)"\r\n        />\r\n        <p>\r\n    @if (wasAnswered()) {\r\n        @if (isCorrect()) {\r\n            <b>You are correct!</b><br /><br />\r\n        } @else {\r\n            That is incorrect.<br />\r\n            The correct answer is:&nbsp;\r\n            <b [innerHTML]="sanitizedAnswer()"></b>\r\n        }\r\n    } @else {\r\n        <br /><br />\r\n    }\r\n            </p>\r\n            <p>\r\n                <button\r\n                    class="button-ok"\r\n                    (click)="onClick()"\r\n                    keydown=""\r\n                    [disabled]="answer().length === 0"\r\n                    [tabIndex]="0"\r\n                >\r\n                    {{ buttonName() }}\r\n                </button>\r\n            </p>\r\n        </div>\r\n}';
  }
});

// angular:jit:style:src\app\play\play.scss
var play_default2;
var init_play2 = __esm({
  "angular:jit:style:src\\app\\play\\play.scss"() {
    play_default2 = "/* src/app/play/play.scss */\n/*# sourceMappingURL=play.css.map */\n";
  }
});

// src/app/play/play.ts
var Play;
var init_play3 = __esm({
  "src/app/play/play.ts"() {
    "use strict";
    init_tslib_es6();
    init_play();
    init_play2();
    init_core();
    init_Difficulty();
    init_router();
    init_Constants();
    init_question_service();
    init_esm();
    init_questionxofx();
    init_categoryanddifficulty();
    init_question();
    init_answers();
    init_platform_browser();
    Play = class Play2 {
      router = inject(Router);
      route = inject(ActivatedRoute);
      sanitizer = inject(DomSanitizer);
      questionService = inject(QuestionService);
      questions = signal([]);
      questionIndex = signal(0);
      wasAnswered = signal(false);
      answer = signal("");
      isCorrect = signal(false);
      correctAnswerCount = signal(0);
      sanitizedAnswer = signal("");
      question = signal({});
      ngOnInit() {
        const numberOfQuestions = Number(this.route.snapshot.paramMap.get("questions"));
        let difficulty = Difficulty.any;
        this.route.queryParams.subscribe((params) => {
          difficulty = params["difficulty"];
        });
        if (isNaN(numberOfQuestions) || numberOfQuestions == null || numberOfQuestions < QUESTIONS_MIN || numberOfQuestions > QUESTIONS_MAX) {
          this.router.navigate(["/"]);
        }
        this.questionService.getQuestions(numberOfQuestions, difficulty).pipe(catchError((err) => {
          console.error(err);
          throw err;
        })).subscribe((rawQuestions) => {
          const formattedQuestions = getFormattedQuestions(rawQuestions);
          this.questions.set(formattedQuestions);
          this.question.set(formattedQuestions[0]);
        });
      }
      setAnswer(answer) {
        this.answer.set(answer);
      }
      onClick() {
        console.log("joe joe joe joe joe", this.question().number, this.wasAnswered());
        if (this.wasAnswered()) {
          const nextQuestionNumber = this.questionIndex() + 1;
          this.questionIndex.set(nextQuestionNumber);
          this.question.set(nextQuestionNumber < this.questions().length ? this.questions()[nextQuestionNumber] : {});
          this.wasAnswered.set(false);
          this.answer.set("");
        } else {
          this.wasAnswered.set(true);
          this.isCorrect.set(this.answer() == this.question().answer);
          if (this.isCorrect()) {
            this.correctAnswerCount.set(this.correctAnswerCount() + 1);
          } else {
            this.sanitizedAnswer.set(this.sanitizer.bypassSecurityTrustHtml(this.question().answer));
          }
        }
      }
      buttonName() {
        return this.wasAnswered() ? "Next Question" : "Answer";
      }
      playAgain() {
        this.router.navigate([""]);
      }
    };
    Play = __decorate([
      Component({
        selector: "app-play",
        imports: [Questionxofx, Categoryanddifficulty, Question, Answers],
        template: play_default,
        styles: [play_default2]
      })
    ], Play);
  }
});

// src/app/data/GetQuestionsResponse.json
var GetQuestionsResponse_default;
var init_GetQuestionsResponse = __esm({
  "src/app/data/GetQuestionsResponse.json"() {
    GetQuestionsResponse_default = {
      response_code: 0,
      results: [
        {
          type: "multiple",
          difficulty: "hard",
          category: "Science: Computers",
          question: "America Online (AOL) started out as which of these online service providers?",
          correct_answer: "Quantum Link",
          incorrect_answers: [
            "CompuServe",
            "Prodigy",
            "GEnie"
          ]
        },
        {
          type: "boolean",
          difficulty: "easy",
          category: "Entertainment: Video Games",
          question: "Deus Ex (2000) does not feature the World Trade Center because it was destroyed by terrorist attacks according to the game&#039;s plot.",
          correct_answer: "True",
          incorrect_answers: [
            "False"
          ]
        },
        {
          type: "multiple",
          difficulty: "medium",
          category: "Entertainment: Japanese Anime &amp; Manga",
          question: "Which of these is not a world in the anime &quot;Buddyfight&quot;?",
          correct_answer: "Ancient Dragon World",
          incorrect_answers: [
            "Dragon World",
            "Star Dragon World",
            "Darkness Dragon World"
          ]
        },
        {
          type: "boolean",
          difficulty: "medium",
          category: "Entertainment: Video Games",
          question: "In &quot;Super Mario World&quot;, the rhino mini-boss, Reznor, is named after the lead singer of the band &quot;Nine Inch Nails&quot;.",
          correct_answer: "True",
          incorrect_answers: [
            "False"
          ]
        },
        {
          type: "boolean",
          difficulty: "easy",
          category: "General Knowledge",
          question: "A scientific study on peanuts in bars found traces of over 100 unique specimens of urine.",
          correct_answer: "False",
          incorrect_answers: [
            "True"
          ]
        },
        {
          type: "multiple",
          difficulty: "medium",
          category: "Entertainment: Video Games",
          question: "Which of these is NOT a playable character race in the video game &quot;Starbound&quot;?",
          correct_answer: "Fenerox",
          incorrect_answers: [
            "Floran",
            "Novakid",
            "Hylotl"
          ]
        },
        {
          type: "multiple",
          difficulty: "easy",
          category: "Entertainment: Music",
          question: "Which English guitarist has the nickname &quot;Slowhand&quot;?",
          correct_answer: "Eric Clapton",
          incorrect_answers: [
            "Mark Knopfler",
            "Jeff Beck",
            "Jimmy Page"
          ]
        },
        {
          type: "boolean",
          difficulty: "medium",
          category: "Science: Computers",
          question: "The &#039;Raspberry Pi&#039; series of single-board computers were created in the United States.",
          correct_answer: "False",
          incorrect_answers: [
            "True"
          ]
        },
        {
          type: "boolean",
          difficulty: "easy",
          category: "Entertainment: Video Games",
          question: "Big the Cat is a playable character in &quot;Sonic Generations&quot;.",
          correct_answer: "False",
          incorrect_answers: [
            "True"
          ]
        },
        {
          type: "multiple",
          difficulty: "medium",
          category: "Entertainment: Japanese Anime &amp; Manga",
          question: "In &quot;Puella Magi Madoka Magica&quot;, what is the first name of Madoka&#039;s younger brother?",
          correct_answer: "Tatsuya",
          incorrect_answers: [
            "Montoya",
            "Tomohisa",
            "Minato"
          ]
        }
      ]
    };
  }
});

// src/app/play/play.spec.ts
var require_play_spec = __commonJS({
  "src/app/play/play.spec.ts"(exports) {
    init_testing();
    init_play3();
    init_router();
    init_esm();
    init_http();
    var import_jasmine_auto_spies = __toESM(require_dist());
    init_question_service();
    init_GetQuestionsResponse();
    describe("Play", () => {
      let component;
      let fixture;
      let httpSpy;
      const activatedRouteMock = {
        snapshot: {
          paramMap: /* @__PURE__ */ new Map([["questions", "10"]])
        },
        queryParams: of({ difficulty: "medium" })
      };
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Play],
          providers: [
            QuestionService,
            { provide: HttpClient, useValue: (0, import_jasmine_auto_spies.createSpyFromClass)(HttpClient) },
            { provide: ActivatedRoute, useValue: activatedRouteMock }
          ]
        }).compileComponents();
        fixture = TestBed.createComponent(Play);
        component = fixture.componentInstance;
        httpSpy = TestBed.inject(HttpClient);
        httpSpy.get.and.nextWith(GetQuestionsResponse_default);
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_play_spec();
//# sourceMappingURL=spec-play.spec.js.map
