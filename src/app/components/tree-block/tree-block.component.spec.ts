import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeBlockComponent } from './tree-block.component';

describe('TreeBlockComponent', () => {
  let component: TreeBlockComponent;
  let fixture: ComponentFixture<TreeBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
