import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CharacterQuality, FifthEditionService, QualityView } from '@shadowrun/app/5e';

@Component({
  /* tslint:disable-next-line */
  selector: 's5e-view-qualities',
  templateUrl: './view-qualities.component.html',
  styleUrls: ['./view-qualities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewQualitiesComponent {
  @Input() view: 'concise' | 'full' = 'full';
  @Input() set attributes(value: CharacterQuality[]) {
    this.qualities$.next((value ?? []).map(i => this.service.getQualityView(i)));
  }
  readonly qualities$: BehaviorSubject<QualityView[]> = new BehaviorSubject<QualityView[]>([]);
  constructor(private readonly service: FifthEditionService) {}
}
