import { Component, OnInit } from '@angular/core';
import { MenuService } from '../fw/services/menu.service';
import{initialMenuItems}from'./app.menu'
import { FrameworkConfigService, FrameworkConfigSettings } from '../fw/services/framework-config.service';

@Component({
  selector: 'abhi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private frameworkConfigService: FrameworkConfigService,
    private menuService: MenuService) {

    let config: FrameworkConfigSettings = {
      socialIcons: [
        { imageFile: 'assets/Images/social-fb-bw.png', alt: 'Facebook', link: 'http://www.facebook.com' },
        { imageFile: 'assets/Images/social-google-bw.png', alt: 'Google +', link: 'http://www.google.com' },
        { imageFile: 'assets/Images/social-twitter-bw.png', alt: 'Twitter', link: 'http://www.twitter.com' }
      ],
      showLanguageSelector: true,
      showUserControls: true,
      showStatusBar: true,
      showStatusBarBreakpoint: 800
    };

    frameworkConfigService.configure(config);
    menuService.items = initialMenuItems;
  }
}

