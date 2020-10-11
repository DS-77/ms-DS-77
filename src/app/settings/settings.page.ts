import { Component, OnInit } from '@angular/core';
import * as data from '../../assets/test_data.json';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  private user = data['user_data'];
  private categories = data['categories'];

  constructor() { }

  ngOnInit() {
  }

}
