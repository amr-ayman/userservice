import {Component, EventEmitter, Output} from '@angular/core';
import {TranslationService} from '../../../services/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  private activeSidebar = false;
  @Output() sidebar = new EventEmitter<boolean>();

  constructor(private translate: TranslationService) {
  }

  toggleSidebar() {
    this.activeSidebar = !this.activeSidebar;
    this.sidebar.emit(this.activeSidebar);
  }

  changeLang() {
    this.translate.changeLang();
  }
}
