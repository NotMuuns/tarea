import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent {

  @Input() total:number=0;
  @Input() mensaje:string='';

  constructor(){

  }
}
