import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumComponent } from './forum.component';
import { MainMenuComponent } from '../../components/main-menu/main-menu.component';

describe('ForumComponent', () => {
  let component: ForumComponent;
  let fixture: ComponentFixture<ForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForumComponent, MainMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the page', () => {
    expect(component).toBeTruthy();
  });
});
