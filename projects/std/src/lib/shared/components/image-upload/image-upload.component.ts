import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { SnackbarService, StorageService } from '@std';
import { BehaviorSubject, forkJoin, of } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';
import { BYTES_IN_MB } from '../../../const';

@Component({
    selector: 'image-upload',
    templateUrl: './image-upload.component.html',
    styleUrls: ['./image-upload.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ImageUploadComponent {
  private readonly storage = inject(StorageService);
  private readonly snackbar = inject(SnackbarService);

  @Input({ required: true }) path: string;
  @Input() color: 'primary' | 'accent' = 'primary';
  @Input() label: string = 'Upload Images';
  @Input() limit: number = BYTES_IN_MB * 10;

  readonly loading$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  onImageChange(list: FileList): void {
    if (!this.path) { return; }

    const files = Array.from(list).filter(i => i.size <= this.limit);
    const hasSizeOverLimit = files.length < list.length;

    if (hasSizeOverLimit) {
      this.snackbar.info(`Some of the files size are more than limit, and they won't be uploaded.`);
    }

    this.loading$.next(true);

    forkJoin([...files.map(file => this.storage.upload(`${this.path}/${file.name}`, file))])
      .pipe(
        tap(() => {
          this.snackbar.success('Images successfully saved!');
        }),
        catchError(() => {
          this.snackbar.error('Some error occurred, try again later!');
          return of(null);
        }),
        finalize(() => this.loading$.next(false))
      )
      .subscribe();
  }
}
