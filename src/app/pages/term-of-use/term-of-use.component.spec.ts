import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermOfUseComponent } from './term-of-use.component';
import { MainMenuComponent } from '../../components/main-menu/main-menu.component';

describe('TermOfUseComponent', () => {
  let component: TermOfUseComponent;
  let fixture: ComponentFixture<TermOfUseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TermOfUseComponent, MainMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TermOfUseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the page', () => {
    expect(component).toBeTruthy();
  });
});
