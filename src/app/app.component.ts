import { Component, OnInit } from '@angular/core';
import { UsersService } from "./services/users.service";
import { FirebaseListObservable } from "angularfire2/database";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  length: any;
  public users: any[] = [];
  constructor(
    private usersService: UsersService
  ) {

  }
  public ngOnInit(): void {
    this.usersService.getUser().subscribe((data) => {
      data.forEach((el, i, val) => {
        // el.forEach(element => {
        //   console.log(el)
        // });
        // this.users.push(el);
        // this.length = el.length;
        // console.log(el)
        
      });
    })
  }
}
{
  "users" : [ {
    "name" : "Arnold",
    "old" : 15
  }, {
    "name" : "Bill",
    "old" : 28
  } , {
    "name" : "Andrey",
    "old" : 22
  } , {
    "name" : "Zina",
    "old" : 99
  } , {
    "name" : "John",
    "old" : 40
  } , {
    "name" : "Addy",
    "old" : 13
  } , {
    "name" : "Vasiliy",
    "old" : 21
  }, {
    "name" : "Eldar",
    "old" : 65
  } , {
    "name" : "Anna",
    "old" : 65
  }, {
    "name" : "Sonya",
    "old" : 20
  }
]
}
