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
  currentMember;
  newPostForm = false;

  constructor(private clubService: ClubService, private router: Router, private activatedRoute: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.activatedRoute.params.forEach((urlParameter) => {
      this.memberKey = urlParameter['id'];
    });
    this.currentMember = this.clubService.getMemberById(this.memberKey);
    }

  togglePostForm(){
    if(this.newPostForm){
      this.newPostForm = false;
    } else {
      this.newPostForm = true;
    }
  }

  sendNewPost(title: string, content: string, img: string) {
    console.log(this.memberKey);
    var newPost = {
      title: title,
      content: content,
      img: img,
      memberKey: this.memberKey,
    }
    this.clubService.addNewPost(newPost);
    this.newPostForm = false;
  }
}
