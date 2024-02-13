import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenPencilsComponent } from './pen-pencils.component';

describe('PenPencilsComponent', () => {
  let component: PenPencilsComponent;
  let fixture: ComponentFixture<PenPencilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenPencilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PenPencilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
