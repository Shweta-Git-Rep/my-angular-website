import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-contact",
  template: `
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Contact Us!</h1>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <form (ngSubmit)="submitForm()" #contactForm="ngForm">
          <!-- Name-->
          <div class="field">
            <label class="label">Name</label>
            <input
              type="text"
              name="name"
              class="input"
              [(ngModel)]="name"
              #nameInput="ngModel"
              required
            />

            <div
              class="help is-error"
              *ngIf="nameInput.invalid && nameInput.touched"
            >
              Your name is required
            </div>
          </div>

          <!-- Email-->
          <div class="field">
            <label class="label">Email</label>
            <input
              type="email"
              name="email"
              class="input"
              [(ngModel)]="email"
              #emailInput="ngModel"
              required
              email
            />
            <div
              class="help is-error"
              *ngIf="emailInput.invalid && emailInput.touched"
            >
              Your email is required and needs to be a valid email.
            </div>
          </div>

          <!-- Message-->
          <div class="field">
            <label class="label">Message</label>
            <textarea
              name="message"
              class="textarea"
              [(ngModel)]="message"
            ></textarea>
          </div>

          <!-- Button -->
          <button
            type="submit"
            class="button is-large is-warning"
            [disabled]="contactForm.invalid"
          >
            Send!
          </button>
        </form>
      </div>
    </section>
  `,
  styles: [],
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;
  constructor() {}

  ngOnInit(): void {}

  //below method is bound to the form submit event
  submitForm() {
    const message = `My name is ${this.name}`;
    alert(message);
  }
}
