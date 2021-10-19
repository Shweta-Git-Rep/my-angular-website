import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  template: `
    <div class="navbar is-dark">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="assets/img/angular-logo.png" />
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" routerLink="/">HOME</a>
          <a class="navbar-item" routerLink="/contact">CONTACT</a>
          <a class="navbar-item" routerLink="/users">USERS</a>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
