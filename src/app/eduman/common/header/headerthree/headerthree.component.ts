import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-headerthree',
  templateUrl: './headerthree.component.html',
  styleUrls: ['./headerthree.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderthreeComponent implements OnInit {
  //cart sidebar activation start
  sidebarCartActive: boolean = false;
  cartclick() {
    if (this.sidebarCartActive == false) {
      this.sidebarCartActive = true;
      this.sidebarInfoActive = false;
    } else {
      this.sidebarCartActive = false;
    }
  }
  //cart sidebar activation end

  //sidebar info click activation start
  sidebarInfoActive: boolean = false;
  infoclick() {
    if (this.sidebarInfoActive == false) {
      this.sidebarCartActive = false;
      this.sidebarInfoActive = true;
    } else {
      this.sidebarInfoActive = false;
    }
  }
  //sidebar info click activation end

  //counter
  counters: { [key: string]: number } = {
    count: 1,
    count1: 1,
    count2: 1,
  };

  counter(key: string, type: string) {
    if (type === 'add') {
      this.counters[key]++;
    } else if (type === 'subtract' && this.counters[key] > 1) {
      this.counters[key]--;
    }
  }

  //sticky header activation
  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 40;
  }

  constructor() {}

  ngOnInit(): void {}
}
