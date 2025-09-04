import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberInputCellComponent } from './number-input-cell.component';

describe('NumberInputCellComponent', () => {
  let component: NumberInputCellComponent;
  let fixture: ComponentFixture<NumberInputCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberInputCellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberInputCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
