import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CraftsmanshipEditComponent } from './craftsmanship-edit.component';

describe('CraftsmanshipEditComponent', () => {
  let component: CraftsmanshipEditComponent;
  let fixture: ComponentFixture<CraftsmanshipEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CraftsmanshipEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CraftsmanshipEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
