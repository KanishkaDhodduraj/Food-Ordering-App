import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Foodmenu } from './foodmenu';

describe('Foodmenu', () => {
  let component: Foodmenu;
  let fixture: ComponentFixture<Foodmenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Foodmenu],
    }).compileComponents();

    fixture = TestBed.createComponent(Foodmenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
