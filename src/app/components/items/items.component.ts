import { Component } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {

  item: Item[];

  constructor () {

  }

  ngOnInit(): void {
    
  }
}
