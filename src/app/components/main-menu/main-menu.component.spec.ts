import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuComponent } from './main-menu.component';
import { By } from '@angular/platform-browser';

describe('MainMenuComponent', () => {
  let component: MainMenuComponent;
  let fixture: ComponentFixture<MainMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*** Component Integrity Tests ***/

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render all tabs in main menu', () => {
    const { debugElement } = fixture;
    const { nativeElement } = debugElement;
    expect(nativeElement.textContent.includes('Accueil')).toBeTruthy();
    expect(nativeElement.textContent.includes('Services')).toBeTruthy();
    expect(nativeElement.textContent.includes('Documentation')).toBeTruthy();
    expect(nativeElement.textContent.includes('Forum')).toBeTruthy();
    expect(debugElement.query(By.css('#user-page'))).toBeTruthy();
  });

  it('Should render all tabs in submenu', () => {
    const { debugElement } = fixture;
    const menuBtn = debugElement.query(By.css('#user-logo'));
    expect(debugElement.query(By.css('#user-menu')) === null).toBe(true);
    menuBtn.triggerEventHandler('click', null);
    fixture.detectChanges();

    const subMenu = debugElement.query(By.css('#user-menu'));
    console.log(subMenu);
    /*
    expect(subMenu.children[0].nativeElement.innerHTML).toBe('Mon compte');
    
    expect(subMenu.children[1].nativeElement.innerHTML).toBe('Messagerie');
    expect(subMenu.children[2].nativeElement.innerHTML).toBe('Connexion');
    */
  });
});
