import { Component, OnInit } from '@angular/core';
import { ItemsSaverService } from '../services/items-saver.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  public q;
  constructor(
    private itemsSaverService: ItemsSaverService
  ) { }

  ngOnInit() {
    this.q = this.itemsSaverService.itemsInList;
    console.log(this.q)
  }

}
