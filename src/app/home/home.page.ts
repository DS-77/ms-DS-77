import { Component } from '@angular/core';
// Import test data from JSON file
import * as data from '../../assets/test_data.json';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private data_store = data.stores;

  constructor() {}

}
