import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameroomComponent } from './gameroom.component';

describe('GameroomComponent', () => {
  let component: GameroomComponent;
  let fixture: ComponentFixture<GameroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameroomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
