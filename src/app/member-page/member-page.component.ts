import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ClubService } from '../club.service';

@Component({
  selector: 'app-member-page',
  templateUrl: './member-page.component.html',
  styleUrls: ['./member-page.component.css'],
  providers: [ClubService]
})
export class MemberPageComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  memberKey: string;
  member;

  constructor(private clubService: ClubService, private router: Router, private activatedRoute: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.activatedRoute.params.forEach((urlParameter) => {
      this.memberKey = urlParameter['id'];
    });
    // this.members = this.clubService.getMemberById(this.memberKey);
    this.clubService.getMemberById(this.memberKey).subscribe( snap => {
      this.member = snap;
    });
    }

}
