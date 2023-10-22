import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsLabelComponent } from './cms-label.component';

describe('CmsLabelComponent', () => {
  let component: CmsLabelComponent;
  let fixture: ComponentFixture<CmsLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CmsLabelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CmsLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
