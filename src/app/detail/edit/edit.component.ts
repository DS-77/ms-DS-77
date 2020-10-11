import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {

  @Input() item: object;
  name: string = '';

  obj = {
    name: '',
    amount: 0,
    date: ''
  };

  private edit_data;

  constructor(public modalController: ModalController, private formBuilder: FormBuilder) {

    this.edit_data = this.formBuilder.group({
      name: ['', Validators.required],
      amount:  ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  // Test function
  print() {
    console.log(`Name: ${this.name}`);
  }

  save() {

    let name = this.edit_data.get('name').value;
    let amount = this.edit_data.get('amount').value;
    let date = this.edit_data.get('date').value;

    this.item['store'] = name;
    this.item['amount'] = amount;
    this.item['date'] = date;

    this.dismiss();
  }

  dismiss() {
    this.modalController.dismiss(this.item);
  }

  ngOnInit() {}

}
