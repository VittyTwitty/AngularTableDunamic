import { Injectable } from '@angular/core';
import { mockData } from './data';

@Injectable()
export class FoodService {

  public users: any[];
  constructor() {

  }

  public getUser() {
    return this.users = mockData;
  }

}
