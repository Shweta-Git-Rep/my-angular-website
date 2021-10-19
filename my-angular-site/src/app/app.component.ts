import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styles: [],
})
export class AppComponent {
  constructor() {}
}
