import { Injectable } from '@angular/core';
import {Item} from '../../models/item'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items:Item[] = [
    {
      id:0,
      title: 'air force 1',
      price: 15000,
      quantity:4,
      completed:false,
    },
    {
      id:1,
      title: 'vapormax',
      price: 19000,
      quantity:2,
      completed:false,
    },
    {
      id:2,
      title: 'jordan',
      price: 23000,
      quantity:1,
      completed:false,
    },
  ];
  constructor() { }

  getItems(){
  

    return this.items;
     
  }

  addItem(item:Item){
    this.items.unshift(item);
  }
}
