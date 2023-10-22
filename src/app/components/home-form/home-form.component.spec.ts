import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFormComponent } from './home-form.component';
import { CmsPanelComponent } from '../cms-panel/cms-panel.component';
import { CmsLabelComponent } from '../cms-label/cms-label.component';
import { SelectCmsComponent } from '../select-cms/select-cms.component';
import { BlackWindowComponent } from '../black-window/black-window.component';

describe('HomeFormComponent', () => {
  let component: HomeFormComponent;
  let fixture: ComponentFixture<HomeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeFormComponent,
        CmsPanelComponent,
        CmsLabelComponent,
        SelectCmsComponent,
        BlackWindowComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
