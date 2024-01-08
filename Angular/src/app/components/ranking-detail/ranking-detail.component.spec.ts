import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingDetailComponent } from './ranking-detail.component';

describe('RankingDetailComponent', () => {
  let component: RankingDetailComponent;
  let fixture: ComponentFixture<RankingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RankingDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RankingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
