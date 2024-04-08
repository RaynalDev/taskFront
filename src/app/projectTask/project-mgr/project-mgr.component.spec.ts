import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMgrComponent } from './project-mgr.component';

describe('ProjectMgrComponent', () => {
  let component: ProjectMgrComponent;
  let fixture: ComponentFixture<ProjectMgrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectMgrComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectMgrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
