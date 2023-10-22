import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { MainMenuComponent } from '../../components/main-menu/main-menu.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { BurgerMenuComponent } from '../../components/burger-menu/burger-menu.component';
import { HomeFormComponent } from 'src/app/components/home-form/home-form.component';
import { CmsPanelComponent } from 'src/app/components/cms-panel/cms-panel.component';
import { CmsLabelComponent } from 'src/app/components/cms-label/cms-label.component';
import { SelectCmsComponent } from 'src/app/components/select-cms/select-cms.component';
import { BlackWindowComponent } from 'src/app/components/black-window/black-window.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        MainMenuComponent,
        BurgerMenuComponent,
        HeaderComponent,
        HomeFormComponent,
        CmsPanelComponent,
        CmsLabelComponent,
        SelectCmsComponent,
        BlackWindowComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the page', () => {
    expect(component).toBeTruthy();
  });
});
