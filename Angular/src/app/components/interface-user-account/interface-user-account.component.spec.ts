import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceUserAccountComponent } from './interface-user-account.component';

describe('InterfaceUserAccountComponent', () => {
  let component: InterfaceUserAccountComponent;
  let fixture: ComponentFixture<InterfaceUserAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InterfaceUserAccountComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterfaceUserAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
