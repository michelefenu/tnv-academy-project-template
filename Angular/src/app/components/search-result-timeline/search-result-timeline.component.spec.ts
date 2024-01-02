import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultTimelineComponent } from './search-result-timeline.component';

describe('SearchResultTimelineComponent', () => {
  let component: SearchResultTimelineComponent;
  let fixture: ComponentFixture<SearchResultTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchResultTimelineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchResultTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
