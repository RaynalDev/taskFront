import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelMgrComponent } from './label-mgr.component';

describe('LabelMgrComponent', () => {
  let component: LabelMgrComponent;
  let fixture: ComponentFixture<LabelMgrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelMgrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LabelMgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
