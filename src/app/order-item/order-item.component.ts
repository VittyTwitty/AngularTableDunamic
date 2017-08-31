import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {
  @Input() item;
  @Input() items;
  @Input() i;
  constructor() { }

  ngOnInit() {
  }

  public deleteProd(ev, i) {
    // let index = this.items.indexOf(item);
    console.log(i);
    if (i > -1) {
      this.items.splice(i, 1);
    }
  }

}
