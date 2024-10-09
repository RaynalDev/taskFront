import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSwitcherComponent } from './auth-switcher.component';

describe('AuthSwitcherComponent', () => {
  let component: AuthSwitcherComponent;
  let fixture: ComponentFixture<AuthSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthSwitcherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
