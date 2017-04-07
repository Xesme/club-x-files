import { Component, OnInit } from '@angular/core';
import { ClubService } from '../club.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ClubService]
})
export class AdminComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  newMemberForm = false;
  memberEditForm;

  constructor(private clubService: ClubService, private router: Router) { }

  ngOnInit() {
    this.members = this.clubService.getMembers();
  }

  sendNewMember(username: string, ranking: string) {
    var newMember = {
      username: username,
      ranking: ranking
    }
    this.clubService.saveMember(newMember);
    this.newMemberForm = false;
  }

  editMember(memberToUpdate){
    this.clubService.updateMember(memberToUpdate);
  }

  toggleAddForm(){
    if(this.newMemberForm) {
      this.newMemberForm = false;
    } else {
      this.newMemberForm = true;
    }
  }

  toggleEdit(member){
    console.log(member);
    if(this.memberEditForm == member){
      this.memberEditForm = null;
    } else {
      this.memberEditForm = member;
    }
  }
}
