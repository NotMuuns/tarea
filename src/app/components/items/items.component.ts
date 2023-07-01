import { Component } from '@angular/core';
import { Item } from '../../../models/item'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {

  items: Item[] = [];
 
  constructor () {

  }

  ngOnInit(): void {
    this.items=[
      {
        id:0,
        title: 'air force 1',
        price: 15000,
        quantity:1,
        completed:false,
      },
      {
        id:1,
        title: 'vapormax',
        price: 19000,
        quantity:1,
        completed:true,
      }
    ];
  }
}
