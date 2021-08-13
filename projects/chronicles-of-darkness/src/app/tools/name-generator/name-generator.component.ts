import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './name-generator.component.html',
  styleUrls: ['./name-generator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameGeneratorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onGenerateClick(): void {}
}
