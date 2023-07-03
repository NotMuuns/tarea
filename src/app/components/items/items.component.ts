import { Component } from '@angular/core';
import { Item } from '../../../models/item'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {

  items: Item[] = [];
  total: number= 0;
  
  constructor () {

  }

  ngOnInit(): void {
    this.items=[
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
    this.getTotal();
  }
  deleteItem(item: Item){
    this.items=this.items.filter(x => x.id != item.id)
    this.getTotal();
  }

  toggleItem(item:Item){
    this.getTotal();
  }

  getTotal(){
    this.total = this.items
                      .filter (item=> !item.completed)    
                      .map(item=>item.quantity * item.price)
                      .reduce((acc,item)=>acc+=item,0);
  }
}
