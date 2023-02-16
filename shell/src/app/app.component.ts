import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';
 styleExp = '0px';

  public openNav() {
    this.styleExp = "250px";
  }

  public closeNav() {
    this.styleExp = "0px";
  }
}
