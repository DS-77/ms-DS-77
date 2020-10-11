import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

// Imported JSON data
import * as data from '../../assets/test_data.json';

// Imported Pages
import { EditComponent } from './edit/edit.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  private data_store = data.stores;
  private filter_text: string;

  constructor(public modalController: ModalController) { }

  /**
   *  Deletes specified item from the data_store list.
   * @param item store object.
   */
  delete(item) {
    const index = this.data_store.indexOf(item, 0);
    if (index > -1) {
      this.data_store.splice(index, 1);
    }
  }

  async edit(item) {
    const modal = await this.modalController.create({
      component: EditComponent,
      componentProps: {
        item
      }
    });

    modal.onDidDismiss().then((someData) => {
      console.log(someData);
    });

    return await modal.present();
  }

  ngOnInit() {}

}
