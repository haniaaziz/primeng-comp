import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputgroupComponent } from './inputgroup.component';

describe('InputgroupComponent', () => {
  let component: InputgroupComponent;
  let fixture: ComponentFixture<InputgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputgroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
