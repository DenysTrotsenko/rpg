import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { FirestoreService, getId } from '@shared';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateComponent {
  readonly form: FormGroup = new FormGroup({
    id: new FormControl(getId()),
    name: new FormControl('', [Validators.required]),
  });

  constructor(
    private readonly firestore: FirestoreService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  onSubmit(form): void {
    this.firestore.update(`campaigns/${form.id}`, { ...form, author: this.route.snapshot.data?.user?.uid })
      .pipe(
        tap(() => this.router.navigate(['campaigns/list']))
      )
      .subscribe();
  }

}