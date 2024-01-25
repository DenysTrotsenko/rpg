import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTraitsComponent } from './item-traits.component';

describe('ItemTraitsComponent', () => {
  let component: ItemTraitsComponent;
  let fixture: ComponentFixture<ItemTraitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemTraitsComponent]
    });
    fixture = TestBed.createComponent(ItemTraitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
