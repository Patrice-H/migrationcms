import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountComponent } from './account.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { MainMenuComponent } from '../../components/main-menu/main-menu.component';
import { BurgerMenuComponent } from '../../components/burger-menu/burger-menu.component';
import { BlackWindowComponent } from 'src/app/components/black-window/black-window.component';
import { LogSignComponent } from 'src/app/components/log-sign/log-sign.component';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AccountComponent,
        MainMenuComponent,
        BurgerMenuComponent,
        BlackWindowComponent,
        LogSignComponent,
        HeaderComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the page', () => {
    expect(component).toBeTruthy();
  });
});
