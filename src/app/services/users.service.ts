import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";
import { mockData } from './data';

@Injectable()
export class FoodService {

  public users: any[];
  constructor(private db: AngularFireDatabase) {

  }

  public getUser() {
    return this.users = mockData;
  }

}
