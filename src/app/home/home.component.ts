import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showNavigationArrows = true;
  showNavigationIndicators = false;
  images =[
    "../../assets/Media/banner1.jpg" ,
    "../../assets/Media/banner2.jpg" ,
    "../../assets/Media/banner3.jpg" ,
    "../../assets/Media/banner4.jpg" ,
    "../../assets/Media/banner5.jpg" ,
    "../../assets/Media/banner6.jpg" ,
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
