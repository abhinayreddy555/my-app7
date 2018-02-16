import { Component } from '@angular/core';
import { HeaderComponent } from './app.header';
import { FooterComponent } from './app.footer';

@Component({
  selector: 'abhi-root',
  template: `<app-header></app-header>
<app-footer></app-footer>`,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'abhi';
}
