import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Categoryanddifficulty } from './categoryanddifficulty';

describe('Categoryanddifficulty', () => {
  let component: Categoryanddifficulty;
  let fixture: ComponentFixture<Categoryanddifficulty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Categoryanddifficulty]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Categoryanddifficulty);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('category', 'category name');
    fixture.componentRef.setInput('difficulty', 'medium');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
