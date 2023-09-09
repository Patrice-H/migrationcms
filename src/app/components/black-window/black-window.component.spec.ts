import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackWindowComponent } from './black-window.component';

describe('BlackWindowComponent', () => {
  let component: BlackWindowComponent;
  let fixture: ComponentFixture<BlackWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlackWindowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BlackWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
