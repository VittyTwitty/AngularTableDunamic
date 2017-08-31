import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemsSaverService } from '../services/items-saver.service';
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, OnDestroy {
  public flag: boolean = false;
  public sub: Subscription;
  public itemsInList: string[] = [];

  constructor(
    private itemsSaverService: ItemsSaverService
  ) { }

  public ngOnInit(): void {
    this.sub = this.itemsSaverService.getItemsInList().subscribe((data) => {
      this.itemsInList.push(data);
      console.log(this.itemsInList)
      if (this.itemsInList.length > 0) {
        this.flag = true;
      }
    });
  }
  public addToCart() {
    this.itemsInList = [];
  }
  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
