import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { MainMenuComponent } from '../../components/main-menu/main-menu.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { BurgerMenuComponent } from '../../components/burger-menu/burger-menu.component';

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
