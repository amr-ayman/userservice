import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {TranslationService} from '../../../services/translation.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit, OnDestroy {

  @Input() activeSidebar: boolean;
  private placement: string;
  langSubscription: Subscription;

  constructor(private translate: TranslationService) { }

  ngOnInit() {
    this.langSubscription = this.translate.isArabic$.subscribe(value => {
      value ? this.placement = 'left' : this.placement = 'right';
    });
  }
  ngOnDestroy() {
    this.langSubscription.unsubscribe();
  }

}
