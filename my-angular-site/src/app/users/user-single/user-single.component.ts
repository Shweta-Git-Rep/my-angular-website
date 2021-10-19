import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/user.service";

@Component({
  selector: "app-user-single",
  template: `
    <section class="section">
      <div class="container">
        <div class="card" *ngIf="user">
          <div class="card-content">
            <img [src]="user.avatar_url" />
            <h1>{{ user.login }}</h1>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class UserSingleComponent implements OnInit {
  user: any;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const username = params["username"];

      //pass above username to the getUser service
      this.userService.getUser(username).subscribe((user) => {
        this.user = user;
      });
    });
  }
}
