import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputotpComponent } from './inputotp.component';

describe('InputotpComponent', () => {
  let component: InputotpComponent;
  let fixture: ComponentFixture<InputotpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputotpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputotpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
