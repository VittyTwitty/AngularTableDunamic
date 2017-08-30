import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

@Injectable()
export class UsersService {

  public users: FirebaseListObservable<any[]>
  constructor(private db: AngularFireDatabase) {
    this.users = this.db.list('/users');
  }

  public getUser() {
    return this.db.list('/users');
  }

}
