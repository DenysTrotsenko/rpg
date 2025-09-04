import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class AuthComponent {}
