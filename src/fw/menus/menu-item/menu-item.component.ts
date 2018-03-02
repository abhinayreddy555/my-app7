import { Component, OnInit,Input } from '@angular/core';
import { MenuItem } from '../../services/menu.service';
@Component({
  selector: 'abhi-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input()item:MenuItem
  constructor() { }

  ngOnInit() {
  }

}
