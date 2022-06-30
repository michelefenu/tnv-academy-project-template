import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMGComponent } from './footer-mg.component';

describe('FooterMGComponent', () => {
  let component: FooterMGComponent;
  let fixture: ComponentFixture<FooterMGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterMGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
