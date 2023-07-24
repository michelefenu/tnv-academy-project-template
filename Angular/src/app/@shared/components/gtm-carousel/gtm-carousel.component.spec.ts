import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GtmCarouselComponent } from './gtm-carousel.component';

describe('GtmCarouselComponent', () => {
  let component: GtmCarouselComponent;
  let fixture: ComponentFixture<GtmCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GtmCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GtmCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
