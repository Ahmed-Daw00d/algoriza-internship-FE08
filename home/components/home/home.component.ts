import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {
  cards: any[] = [
    {
      img: "/assets/images/home/Australia.png",
      title: "Australia",
      describe: "2246 properties",
    },
    {
      img: "/assets/images/home/japan.png",
      title: "japan",
      describe: "2246 properties",
    },
    {
      img: "/assets/images/home/NewZ.png",
      title: "New Zealand",
      describe: "2246 properties",
    },
    {
      img: "/assets/images/home/Greece.png",
      title: "Greece",
      describe: "2246 properties",
    },
  ];
  trips: any[] = [
    {
      img: "/assets/images/home/trip1.png",
      title: "Sydeny’s 10 most fashionable 5 star hotels",
      describe: "Browse the fastest growing tourism sector in the heart of Australia tourism capital ....",
    },
    {
      img: "/assets/images/home/trip2.png",
      title: "Top cities for Vegan Travellers",
      describe: "Top sites where you do not have to worry about being a vegan. Our tourist guide is here...",
    },
    {
      img: "/assets/images/home/trip3.png",
      title: "World’s top destinations during and post covid timeline",
      describe: "Pandemic is still intact and will be here for a longer time. Here’s where your next destination...",
    }
  ];
  hotels: any[] = [
    {
      img: "/assets/images/home/hotel1.png",
      title: "Lakeside Motel Warefront",
      describe: "2246 properties",
    },
    {
      img: "/assets/images/home/hotel2.png",
      title: "Recce Graham resort",
      describe: "2246 properties",
    },
    {
      img: "/assets/images/home/hotel3.png",
      title: "Fireside Dinners",
      describe: "2246 properties",
    },
    {
      img: "/assets/images/home/hotel4.png",
      title: "Oculous Inn Stay",
      describe: "2246 properties",
    },
  ];
  constructor(private router: Router) {}

  search() {
    if ("user" in localStorage) {
    } else {
      this.router.navigate(["/sign"]);
    }
  }
}
