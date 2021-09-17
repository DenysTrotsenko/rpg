import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AttributeView, CharacterAttribute, FifthEditionService } from '@shadowrun/app/5e';

@Component({
  /* tslint:disable-next-line */
  selector: 's5e-view-attributes',
  templateUrl: './view-attributes.component.html',
  styleUrls: ['./view-attributes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewAttributesComponent {
  @Input() view: 'concise' | 'full' = 'full';
  @Input() set attributes(value: CharacterAttribute[]) {
    this.attributes$.next((value ?? []).map(i => this.service.getAttributeView(i)));
  }
  readonly attributes$: BehaviorSubject<AttributeView[]> = new BehaviorSubject<AttributeView[]>([]);
  constructor(private readonly service: FifthEditionService) {}
}
