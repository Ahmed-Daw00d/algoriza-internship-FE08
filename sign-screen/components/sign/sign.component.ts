import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { Router } from "@angular/router";
@Component({
  selector: "app-sign",
  templateUrl: "./sign.component.html",
  styleUrl: "./sign.component.scss",
})
export class SignComponent {
  title: string = "Sign in";
  reTitle: string = "Register";
  word: string = "Don't";
  //
  form!: FormGroup;
  user: any[] = [];
  alert: boolean = false;
  //
  constructor(private build: FormBuilder, private router: Router) {}
  ngOnInit() {
    this.form = this.build.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
      confirm: [""],
    });
  }

  //
  convert() {
    this.title == "Sign in"
      ? (this.title = "Register")
      : (this.title = "Sign in");
    this.reTitle == "Register"
      ? (this.reTitle = "Sign in")
      : (this.reTitle = "Register");
    this.alert = false;
  }
  //
  register() {
    if (this.title == "Register") {
      if ("user" in localStorage) {
        this.user = JSON.parse(localStorage.getItem("user")!);
        this.user.push(this.form.value);
        localStorage.setItem("user", JSON.stringify(this.user));
      } else {
        this.user.push(this.form.value);
        localStorage.setItem("user", JSON.stringify(this.user));
      }
    } else {
      this.signIn();
    }
  }
  //
  signIn() {
    if ("user" in localStorage) {
      this.user = JSON.parse(localStorage.getItem("user")!);
      let x = this.user.find(
        (res) =>
          res.email == this.form.value.email &&
          res.password == this.form.value.password
      );
      if (x !== undefined) {
        this.alert = false;
        this.router.navigate(["/home"]);
        console.log(x);
      } else {
        this.alert = true;
      }
    } else {
      this.convert();
    }
  }
}
