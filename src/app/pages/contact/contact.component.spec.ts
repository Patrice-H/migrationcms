import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { MainMenuComponent } from '../../components/main-menu/main-menu.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactComponent, MainMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the page', () => {
    expect(component).toBeTruthy();
  });
});
