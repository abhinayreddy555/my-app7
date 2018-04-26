import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AppDataService } from '../services/app-data.service';
import { Country } from '../view-models/Country';

@Component({
  selector: 'abhi-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  allCountries: Array<Country>;
  count = 0;
  singleDisplay = false;
  countries: Array<Country>;
  countryName = '';

  constructor(private dataService: AppDataService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.dataService.getCountries().subscribe(
      countries => {
        this.allCountries = countries;

        this.count = this.route.snapshot.params['count'];
        this.singleDisplay = this.route.snapshot.params['display'];
        this.countryName = this.route.snapshot.params['countryName']

        if (this.singleDisplay) {
          this.displaySingleCountry();
        }
        else {
          this.updateList();
        }

       
      }
    );

    this.route.params.subscribe(params => {
      this.count = params['count'];
      this.updateList();
    });
  }

  updateList() {
    this.countries = this.count > 0 ? this.allCountries.slice(0, this.count) : this.allCountries;
  }
  displaySingleCountry() {
    for (var i = 0; i <= this.allCountries.length; i++)
    {
      if (this.allCountries[i].name == this.countryName) {
             this.countries.push (this.allCountries[i]);
        
      }
    }
  }

}
