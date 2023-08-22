import { Component } from '@angular/core';
import { Factsheet } from './models/factsheet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'map-app';

  factsheet: Factsheet = {
    id: '',
    iso2Code: '',
    name: '',
    capitalCity: '',
    region: '',
    incomeLevel: '',
    latitude: '',
    longitude: '',
  };

  getName() {
    this.factsheet.name;
  }

  getCap() {
    this.factsheet.capitalCity;
  }

  getRegion() {
    this.factsheet.region;
  }

  getIncome() {
    this.factsheet.incomeLevel;
  }

  getLat() {
    this.factsheet.latitude;
  }

  getLong() {
    this.factsheet.longitude;
  }
}
