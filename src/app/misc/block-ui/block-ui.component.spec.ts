import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockUIComponent } from './block-ui.component';

describe('BlockUIComponent', () => {
  let component: BlockUIComponent;
  let fixture: ComponentFixture<BlockUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlockUIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
