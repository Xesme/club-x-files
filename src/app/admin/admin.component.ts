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

  constructor(private clubService: ClubService, private router: Router) { }

  ngOnInit() {
    this.members = this.clubService.getMembers();
  }

}
