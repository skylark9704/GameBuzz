import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarouselComponent implements OnInit {
  images = ['./assets/images/banner.jpg', './assets/images/banner2.jpg', './assets/images/banner.jpg'];
  constructor(config: NgbCarouselConfig) {
  config.interval = 1000;
   config.wrap = false;
   config.keyboard = false;
   config.pauseOnHover = true;
   config.showNavigationArrows = false;
   config.showNavigationIndicators = false;
  }

  ngOnInit() {
  }

}
