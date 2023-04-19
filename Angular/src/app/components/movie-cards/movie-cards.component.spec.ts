import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardsComponent } from './movie-cards.component';

describe('MovieCardsComponent', () => {
  let component: MovieCardsComponent;
  let fixture: ComponentFixture<MovieCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
