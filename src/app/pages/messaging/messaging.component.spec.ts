import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagingComponent } from './messaging.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { MainMenuComponent } from '../../components/main-menu/main-menu.component';
import { BurgerMenuComponent } from '../../components/burger-menu/burger-menu.component';
import { BlackWindowComponent } from 'src/app/components/black-window/black-window.component';
import { LogSignComponent } from 'src/app/components/log-sign/log-sign.component';

describe('MessagingComponent', () => {
  let component: MessagingComponent;
  let fixture: ComponentFixture<MessagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MessagingComponent,
        MainMenuComponent,
        BurgerMenuComponent,
        BlackWindowComponent,
        LogSignComponent,
        HeaderComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MessagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the page', () => {
    expect(component).toBeTruthy();
  });
});
