import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGuessTitleComponent } from './form-guess-title.component';

describe('FormGuessTitleComponent', () => {
  let component: FormGuessTitleComponent;
  let fixture: ComponentFixture<FormGuessTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGuessTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormGuessTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
