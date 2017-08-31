import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  public items: any[] = [];
  constructor(
    private foodService: FoodService
  ) { }

  ngOnInit() {
    this.userItem()

  }
  public userItem() {
    return this.foodService.getUser().map((res) => {
      this.items.push(res);
    })
  }
}