import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '@std';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ImageInputDialogData {
  selected: string;
  path: string;
}

@Component({
    selector: 'std-image-input-dialog',
    templateUrl: './image-input-dialog.component.html',
    styleUrls: ['./image-input-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ImageInputDialogComponent {
  readonly storage = inject(StorageService);
  readonly data: ImageInputDialogData = inject(MAT_DIALOG_DATA);

  selected: string = this.data.selected;

  readonly gallery$: Observable<string[]> = this.storage.getDownloadUrls(this.data.path);
}
