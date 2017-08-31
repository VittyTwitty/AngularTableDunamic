import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // public items: any[] = [];
  constructor(
  //   private foodService: FoodService
  ) { }

  ngOnInit() {
    // this.userItem()

  }
  // public userItem() {
  //   return this.foodService.getUser().map((res) => {
  //     this.items.push(res);
  //   })
  // }

}
