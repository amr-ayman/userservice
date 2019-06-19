export abstract class MainListComponent {

  listTitle = '';
  listAction = false;
  currentOption = '';

  protected constructor() {
  }

  takeAction(action) {
    this.currentOption = null;
    this.listAction = true;
    switch (action) {
      case 'new':
        this.currentOption = 'new';
        break;
      case 'block':
        this.currentOption = 'block';
        break;
      default:
        this.currentOption = 'activate';
        break;
    }
  }

  closeAction() {
    this.listAction = false;
    setTimeout(() => {
      this.currentOption = null;
    }, 300);
  }
}
