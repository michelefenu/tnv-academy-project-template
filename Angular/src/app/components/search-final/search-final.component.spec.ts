import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFinalComponent } from './search-final.component';

describe('SearchFinalComponent', () => {
  let component: SearchFinalComponent;
  let fixture: ComponentFixture<SearchFinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchFinalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
