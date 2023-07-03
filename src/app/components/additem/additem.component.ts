import { Component, OnInit} from '@angular/core';
import { Item } from 'src/models/item';
import { ItemService } from "../../services/item.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.scss']
})
export class AdditemComponent implements OnInit{

  id:number=0;
  title:string='';
  price:number=0;
  quantity:number=0;
  

  constructor(private itemService:ItemService, private router:Router){

  }

  ngOnInit(): void {
    
  }

  onSubmit(){
      const item = new Item();
      item.id=this.id;
      item.title=this.title;
      item.price=this.price;
      item.quantity=this.quantity;
      item.completed=false;

      this.itemService.addItem(item);
      this.router.navigate(['/']);
  }
}
