import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmCardTimelineComponent } from './film-card-timeline.component';

describe('FilmCardTimelineComponent', () => {
  let component: FilmCardTimelineComponent;
  let fixture: ComponentFixture<FilmCardTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmCardTimelineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilmCardTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
