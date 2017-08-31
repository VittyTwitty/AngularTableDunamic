import { Injectable } from '@angular/core';

@Injectable()
export class ItemsSaverService {

  public itemsInList: any[] = [];

  constructor() {
    console.log(this.itemsInList);
  }


}
