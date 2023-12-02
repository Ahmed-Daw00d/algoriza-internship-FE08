import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
cards:any[]=[{"img":"/assets/images/home/Australia.png","title":"Australia",'describe':"2246 properties"},{"img":"/assets/images/home/japan.png","title":"japan",'describe':"2246 properties"},{"img":"/assets/images/home/NewZ.png","title":"New Zealand",'describe':"2246 properties"},{"img":"/assets/images/home/Greece.png","title":"Greece",'describe':"2246 properties"}];
  constructor(private router:Router){}

  search(){
    if("user" in localStorage){

    }
    else{
this.router.navigate(['/sign'])
    }
  }


}
