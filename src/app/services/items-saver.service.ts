import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Injectable()
export class ItemsSaverService {
  product: string;

  public itemsInList = new Subject<any>();
  constructor() {

  }

  public setItemsInList(prod: string) {
    this.product = prod;
    this.itemsInList.next(prod);
  }

  public getItemsInList(): Observable<any> {
    return this.itemsInList.asObservable();
  }

}
