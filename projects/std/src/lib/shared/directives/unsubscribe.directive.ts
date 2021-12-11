import {Directive, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';

@Directive()
export class UnsubscribeDirective implements OnDestroy {
  private subscription: Subscription = new Subscription();

  set subscriptions(subscription: Subscription) { this.subscription.add(subscription); }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
