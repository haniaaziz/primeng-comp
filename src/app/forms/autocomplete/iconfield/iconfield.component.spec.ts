import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconfieldComponent } from './iconfield.component';

describe('IconfieldComponent', () => {
  let component: IconfieldComponent;
  let fixture: ComponentFixture<IconfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconfieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IconfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
