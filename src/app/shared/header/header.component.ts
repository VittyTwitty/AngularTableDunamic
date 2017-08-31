import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/users.service';
import { ItemsSaverService } from '../../services/items-saver.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public items: any[] = [];
  constructor(
    private foodService: FoodService,
    private itemsSaverService: ItemsSaverService
  ) { }

  ngOnInit() {
    this.userItem()

  }
  public userItem() {
    return this.foodService.getUser().map((res) => {
      this.items.push(res);
    })
  }

  public addProductToList(ev, item) {
    this.itemsSaverService.setItemsInList(item);
  }
}
