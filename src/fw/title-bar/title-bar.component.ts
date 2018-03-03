import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../services/screen.service';
import { MenuService } from '../services/menu.service';
import { UserApi } from '../users/user-api';
@Component({
  selector: 'abhi-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent implements OnInit {

  constructor(private screenService: ScreenService,
    private menuService:MenuService,
    private userApi:UserApi) { }

  ngOnInit() {
  }
  signOut() {
    this.userApi.signOut();
  }
}
