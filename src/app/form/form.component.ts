import { Component, OnInit } from '@angular/core';
// import {SelectItem} from "primeng/api";
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  deliveryOptions = [
    {value : 1, label : 'Delivery'},
    {value : 2, label : 'I pick it up'}
    ]
  extras = [
    {value : 'coke', label : 'Coke'},
    {value : 'ketchup', label : 'Ketchup'},
    {value : 'juice', label : 'Juice'},
    {value : 'water', label : 'Water'}
    ]
  foodTypes = {
    'sushiTypes': [
      {value : 'unagi', label : 'Unagi'},
      {value : 'californiaRoll', label : 'California Roll'},
      {value : 'futoMaki', label : 'Futo Maki'},
      {value : 'nigiri', label : 'Nigiri'},
      {value : 'salmon', label : 'Salmon'}
    ],
    'pastaTypes': [
      {value : 'carbonara', label : 'Carbonara'},
      {value : 'bolognese', label : 'Bolognese'},
      {value : 'arrabiata', label : 'Arrabiata'},
      {value : 'broccoli', label : 'Broccoli'}
    ],
    'pizzaTypes': [
      {value : 'capricciosa', label : 'Capricciosa'},
      {value : 'funghi', label : 'Funghi'},
      {value : 'diavola', label : 'Diavola'},
      {value : 'village', label : 'Village'}
    ]
    };

  ngOnInit() {
    this.form = new FormGroup({
      'delivery': new FormControl(null),

      'deliveryDetails': new FormGroup({
        'address': new FormControl(null),
        'username': new FormControl(null),
        'street': new FormControl(null),
        'postcode': new FormControl(null),
        'number': new FormControl(null),
        'date' : new FormControl(null)
      }),
      'amount' : new FormGroup({
        'coke' : new FormControl(0),
        'ketchup' : new FormControl(0),
        'juice' : new FormControl(0),
        'water' : new FormControl(0)
      }),
      'extras' : new FormGroup({
        'coke' : new FormControl(null),
        'ketchup' : new FormControl(null),
        'juice' : new FormControl(null),
        'water' : new FormControl(null)
      }),
      'sushi': new FormControl(null),
      'pizza': new FormControl(null),
      'pasta': new FormControl(null),
    });
  }
}
