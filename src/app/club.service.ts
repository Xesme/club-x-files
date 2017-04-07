import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ClubService {
members: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.members = angularFire.database.list('members');
    console.log(this.members);
  }

  getMembers() {
    return this.members;
  }

  getMemberById(key: string) {
    return this.angularFire.database.object('members/' + key);
  }

  saveMember(newMember){
    this.members.push(newMember);
  }

  updateMember(memberToUpdate){
    var memberInDatabase = this.getMemberById(memberToUpdate.$key);
    memberInDatabase.update({
      username: memberToUpdate.username,
      ranking: memberToUpdate.ranking
    })
  }

  removeMember(memberToDelete){
    var memberInDatabase = this.getMemberById(memberToDelete.$key);
    memberInDatabase.remove();
    console.log(memberInDatabase);
  }
}
