import { Component, OnInit } from '@angular/core';
import { ClubService } from '../club.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css'],
  providers: [ClubService]
})
export class SplashComponent implements OnInit {
  members: FirebaseListObservable<any[]>;

  constructor(private clubService: ClubService, private router: Router) { }

  ngOnInit() {
    console.log(this.members);
    this.members = this.clubService.getMembers();
  }

}
