import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactsheetListComponent } from './factsheet-list.component';

describe('FactsheetListComponent', () => {
  let component: FactsheetListComponent;
  let fixture: ComponentFixture<FactsheetListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FactsheetListComponent]
    });
    fixture = TestBed.createComponent(FactsheetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
