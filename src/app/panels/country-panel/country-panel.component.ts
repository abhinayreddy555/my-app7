import { Component, Input, OnInit } from '@angular/core';

import { Country } from '../../view-models/Country';

@Component({
  selector: 'abhi-country-panel',
  templateUrl: './country-panel.component.html',
  styleUrls: ['./country-panel.component.css']
})
export class CountryPanelComponent implements OnInit {

  @Input() country: Country;
  @Input() index = 1;
  private test: any;

  constructor() { }

  ngOnInit() {
    this.test = this.country;
  }

}
