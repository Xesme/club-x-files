import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { routing } from './app.routing';
import { ClubService } from './club.service';

import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { UserPageComponent } from './user-page/user-page.component';
import { PostComponent } from './post/post.component';
import { MemberPageComponent } from './member-page/member-page.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    AboutComponent,
    AdminComponent,
    UserPageComponent,
    PostComponent,
    MemberPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing
  ],
  providers: [ClubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
