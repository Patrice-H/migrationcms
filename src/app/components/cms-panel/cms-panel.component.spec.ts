import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsPanelComponent } from './cms-panel.component';
import { CmsLabelComponent } from '../cms-label/cms-label.component';
import { BlackWindowComponent } from '../black-window/black-window.component';

describe('CmsPanelComponent', () => {
  let component: CmsPanelComponent;
  let fixture: ComponentFixture<CmsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CmsPanelComponent,
        CmsLabelComponent,
        BlackWindowComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CmsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
