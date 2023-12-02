import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SignComponent } from "./components/sign/sign.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [SignComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule,BrowserModule],
  exports: [],
})
export class SignScreenModule {}
