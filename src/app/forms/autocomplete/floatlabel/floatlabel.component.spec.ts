import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatlabelComponent } from './floatlabel.component';

describe('FloatlabelComponent', () => {
  let component: FloatlabelComponent;
  let fixture: ComponentFixture<FloatlabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatlabelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FloatlabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
