import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'im-portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortraitComponent {
  @Input() width: number = 100;
  @Input() height: number = 100;
  @Input() readonly: boolean = true;

  src: string;

  onUploadClick(): void {}
  onFromLibraryClick(): void {}
}
