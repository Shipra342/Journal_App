import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryStorageComponent } from './diary-storage.component';

describe('DiaryStorageComponent', () => {
  let component: DiaryStorageComponent;
  let fixture: ComponentFixture<DiaryStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaryStorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
