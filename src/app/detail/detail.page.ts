import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/test_data.json';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  private data_store = new Set(data.stores);
  private filters = [];
  constructor() { }

  delete(item) {
    // console.log(item);
    this.data_store.delete(item);
  }

  ngOnInit() {
  }

}
