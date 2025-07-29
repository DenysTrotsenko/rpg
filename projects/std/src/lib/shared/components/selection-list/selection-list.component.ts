import { Component, ChangeDetectionStrategy, Input, forwardRef, OnInit, OnDestroy } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import { ControlValueAccessor, UntypedFormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector: 'std-selection-list',
    templateUrl: './selection-list.component.html',
    styleUrls: ['./selection-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectionListComponent),
            multi: true
        },
        // {
        //   provide: NG_VALIDATORS,
        //   useExisting: forwardRef(() => SelectionListComponent),
        //   multi: true
        // },
    ],
    standalone: false
})
export class SelectionListComponent implements ControlValueAccessor, OnInit, OnDestroy {
  @Input() value: unknown[];
  readonly control: UntypedFormControl = new UntypedFormControl([]);
  readonly unsubscribe$: Subject<void> = new Subject();
  private onChange: (value: string) => void;
  private onTouched: () => void;

  ngOnInit(): void {
    this.control.valueChanges
      .pipe(
        takeUntil(this.unsubscribe$),
        tap(value => {
          if (!this.onChange) { return; }
          this.onChange(value);
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onSelectClick(ref: MatSelectionList): void {
    ref.selectedOptions.selected.length < this.value.length
      ? ref.selectAll()
      : ref.deselectAll();
  }

  registerOnChange(fn: () => void): void { this.onChange = fn; }

  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  trackById(_, item): string {
    return item.id;
  }

  writeValue(value: unknown[]): void {
    if (!value) { return; }
    this.control.setValue(value);
  }
}
