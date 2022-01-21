import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { tap} from 'rxjs/operators';
import { FirestoreService} from '@shared';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  readonly form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', [Validators.required]),
    miscellaneous: new FormGroup({
      gender: new FormControl(null),
    }),
    attributes: new FormControl(null),
    skills: new FormControl(null),
    traits: new FormControl(null)
  });

  constructor(
    private readonly firestore: FirestoreService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
  }

  onSubmit(form): void {
    this.firestore.update(`characters/${form.id}`, { ...form, author: this.route.snapshot.data?.user?.uid })
      .pipe(
        tap(() => this.router.navigate(['characters/list']))
      )
      .subscribe();
  }

}
