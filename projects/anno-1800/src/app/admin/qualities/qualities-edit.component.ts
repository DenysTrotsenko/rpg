import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './qualities-edit.component.html',
  styleUrls: ['./qualities-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QualitiesEditComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    labels: new FormGroup({
      effect: new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  });

  ngOnInit(): void {
  }

}
