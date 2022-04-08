import {Component} from '@angular/core';

import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index',
  templateUrl: `views/index/index.component.html`,
  providers: [NgbAccordionConfig]
})

export class NgbdAccordionConfig {
    // sign = 'arrow-down';
    toggle:boolean = true;
  constructor(config: NgbAccordionConfig) {
    // customize default values of accordions used by this component tree
    config.closeOthers = true;
    config.type = 'info';
  }

    /*public toggleFieldTextType() {
      /!*if (this.sign == 'arrow-down') {
        this.sign = 'remove';
      } else {
        this.sign = 'remove';
      }*!/
      this.toggle = !this.toggle;
    }*/
}
