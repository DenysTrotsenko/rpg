import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
    selector: 'select-all',
    templateUrl: './select-all.component.html',
    styleUrls: ['./select-all.component.scss'],
    standalone: false
})
export class SelectAllComponent {
  @Input() model: AbstractControl | FormControl;
  @Input() values = [];
  @Input() text = 'Select All';

  isChecked(): boolean {
    return this.model?.value?.length === this.values?.length;
  }

  isIndeterminate(): boolean {
    const selected = this.model?.value?.length;

    return selected > 0 && selected < this?.values?.length;
  }

  toggleSelection(change: MatCheckboxChange): void {
    this.model.setValue(change.checked ? this.values : []);
  }
}
