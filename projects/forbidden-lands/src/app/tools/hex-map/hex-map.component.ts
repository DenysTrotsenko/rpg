import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';
import { MatListItem, MatNavList } from '@angular/material/list';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { NgForOf } from '@angular/common';
import { RouterLinkActive } from '@angular/router';

@Component({
  templateUrl: './hex-map.component.html',
  styleUrls: ['./hex-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatListItem,
    MatNavList,
    MatSidenav,
    MatSidenavContainer,
    MatSidenavContent,
    NgForOf,
    RouterLinkActive
  ],
  standalone: true
})
export class HexMapComponent implements AfterViewInit {
  @ViewChild('myCanvas') canvas: ElementRef<HTMLCanvasElement>;

  private context: CanvasRenderingContext2D;

  ngAfterViewInit(): void {
    this.context = this.canvas.nativeElement.getContext('2d');
  }
}
