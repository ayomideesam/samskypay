import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-index-navbar',
  templateUrl: './index-navbar.component.html',
})
export class IndexNavbarComponent implements OnInit {
  navbarOpen = false;
  toggle:boolean = true;

  constructor() {}

  ngOnInit(): void {}

  setNavbarOpen() {
    this.navbarOpen = !this.navbarOpen;
    this.toggle = !this.toggle;
  }
}
