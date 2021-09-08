import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePcWareComponent } from './create-pc-ware.component';

describe('CreatePcWareComponent', () => {
  let component: CreatePcWareComponent;
  let fixture: ComponentFixture<CreatePcWareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePcWareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePcWareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
