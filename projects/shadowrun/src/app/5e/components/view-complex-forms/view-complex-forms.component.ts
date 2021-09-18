import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Character, ComplexFormView, FifthEditionService, SpellView} from '@shadowrun/app/5e';

@Component({
  /* tslint:disable-next-line */
  selector: 's5e-view-complex-forms',
  templateUrl: './view-complex-forms.component.html',
  styleUrls: ['./view-complex-forms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewComplexFormsComponent {
  @Input() view: 'concise' | 'full' = 'full';
  @Input() set character(value: Character) {
    const forms: ComplexFormView[] = (value?.complex_forms ?? []).map(i => this.service.getComplexFormView(i));
    this.forms$.next(forms);
  }
  readonly forms$: BehaviorSubject<ComplexFormView[]> = new BehaviorSubject<ComplexFormView[]>([]);
  constructor(private readonly service: FifthEditionService) {}
}
