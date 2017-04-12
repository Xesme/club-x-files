import { Component, OnInit } from '@angular/core';
import { ClubService } from '../club.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.css'],
  providers: [ClubService]

})
export class MembersListComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  filterRank: string;

  constructor(private clubService: ClubService, private router: Router) { }

  ngOnInit() {
    this.members = this.clubService.getMembers();
  }

  goToMemberPage(member){
    this.router.navigate(['member-page', member.$key]);
  }

  checkRank(ranking){
    this.filterRank = ranking;
    console.log(this.filterRank);
  }
}
