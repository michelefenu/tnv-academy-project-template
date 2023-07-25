import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewMovieComponent } from './review-movie.component';

describe('ReviewMovieComponent', () => {
  let component: ReviewMovieComponent;
  let fixture: ComponentFixture<ReviewMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
