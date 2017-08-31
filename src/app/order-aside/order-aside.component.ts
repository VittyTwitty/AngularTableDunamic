import { Component, OnInit, OnDestroy } from '@angular/core';
import { ItemsSaverService } from "../services/items-saver.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-order-aside',
  templateUrl: './order-aside.component.html',
  styleUrls: ['./order-aside.component.css']
})
export class OrderAsideComponent implements OnInit, OnDestroy {
  itemsInList: any[] = [];
  sub: Subscription;

  constructor(
    private itemsSaverService: ItemsSaverService
  ) { }

  public ngOnInit(): void {
    this.sub = this.itemsSaverService.getItemsInList().subscribe((data) => {
      this.itemsInList.push(data);
      console.log(this.itemsInList);
    });
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
