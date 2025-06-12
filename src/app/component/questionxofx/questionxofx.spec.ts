import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Questionxofx } from './questionxofx';

describe('Questionxofx', () => {
  let component: Questionxofx;
  let fixture: ComponentFixture<Questionxofx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Questionxofx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Questionxofx);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
