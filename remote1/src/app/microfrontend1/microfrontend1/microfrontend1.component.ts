import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-microfrontend1',
  templateUrl: './microfrontend1.component.html',
  styleUrls: ['./microfrontend1.component.scss']
})
export class Microfrontend1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'leftnav';
  styleExp = '0px';

  public openNav() {
    this.styleExp = "250px";
  }

  public closeNav() {
    this.styleExp = "0px";
  }

}

