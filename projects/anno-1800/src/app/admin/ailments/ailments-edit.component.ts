import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ailments-edit',
  templateUrl: './ailments-edit.component.html',
  styleUrls: ['./ailments-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AilmentsEditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
