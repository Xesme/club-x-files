import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ClubService {
members: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) { }

  getMembers() {
    return this.members;
  }

  getMemberById(key: string) {
    return this.angularFire.database.object('members/' + key);
  }
}
