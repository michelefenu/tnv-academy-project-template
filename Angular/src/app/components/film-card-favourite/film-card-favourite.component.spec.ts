import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmCardFavouriteComponent } from './film-card-favourite.component';

describe('FilmCardFavouriteComponent', () => {
  let component: FilmCardFavouriteComponent;
  let fixture: ComponentFixture<FilmCardFavouriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmCardFavouriteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilmCardFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
