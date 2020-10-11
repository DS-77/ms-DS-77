import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/test_data.json';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  private data_store = data.stores;
  private filter_text: string;

  constructor() { }

  delete(item) {
    const index = this.data_store.indexOf(item, 0);
    if (index > -1) {
      this.data_store.splice(index, 1);
    }
  }

  ngOnInit() {}

}
