import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-ailments',
  templateUrl: './ailments.component.html',
  styleUrls: ['./ailments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AilmentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
