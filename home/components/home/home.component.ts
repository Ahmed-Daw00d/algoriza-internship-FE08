import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router:Router){}

  search(){
    if("user" in localStorage){

    }
    else{
this.router.navigate(['/sign'])
    }
  }
}
