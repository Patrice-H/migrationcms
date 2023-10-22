import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCmsComponent } from './select-cms.component';
import { CmsLabelComponent } from '../cms-label/cms-label.component';

describe('SelectCmsComponent', () => {
  let component: SelectCmsComponent;
  let fixture: ComponentFixture<SelectCmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectCmsComponent, CmsLabelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectCmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
