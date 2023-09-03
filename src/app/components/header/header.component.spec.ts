import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { MainMenuComponent } from '../main-menu/main-menu.component';
import { BurgerMenuComponent } from '../burger-menu/burger-menu.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent, MainMenuComponent, BurgerMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*** Component Integrity Tests ***/

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render logo img', () => {
    const { debugElement } = fixture;
    const logo = debugElement.query(By.css('img'));
    expect(logo).toBeTruthy();
    expect(logo.attributes['src']?.includes('logo1.3.0.jpg')).toBe(true);
  });

  it('should render the navbar', () => {
    const { debugElement } = fixture;
    expect(debugElement.query(By.css('nav'))).toBeTruthy();
  });
});
