import { Component, OnInit } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { Platform, ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { StorageService } from '../shared/storage.service';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isLoggedIn = false;
  users = { id: '', name: '', email: '', picture: { data: { url: '' } } };
  user: Observable<firebase.User>;


  constructor(
    private afAuth: AngularFireAuth,
    private fb: Facebook,
    private gplus: GooglePlus,
    private platform: Platform,
    private storageService: StorageService,
    private router: Router,
    private toast: ToastController
    ) {
      this.user = this.afAuth.authState;
      this.user.subscribe(
        res => {
          console.log(res);
          const result = { id: '', name: res.displayName , email: res.email, picture: { data: { url: res.photoURL } } };
          storageService.setDataToStorage(environment.userData, JSON.stringify(result));
          router.navigate(['/home']);
        }
      );
      fb.getLoginStatus()
      .then(res => {
        console.log(res.status);
        if (res.status === 'connect') {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => console.log(e));
    }

  ngOnInit() {
  }

  fbLogin() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then(res => {
        if (res.status === 'connected') {
          this.isLoggedIn = true;
          this.getUserDetail(res.authResponse.userID);
        } else {
          this.isLoggedIn = false;
        }
      })
      .catch(e => {
        console.log('Error logging into Facebook', e);
        this.showErrorToast(e);
      });
  }

  getUserDetail(userid: any) {
    this.fb.api('/' + userid + '/?fields=id,email,name,picture', ['public_profile'])
      .then(res => {
        console.log(res);
        this.users = res;
        this.storageService.setDataToStorage(environment.userData, JSON.stringify(this.users));
        this.router.navigate(['/home']);
      })
      .catch(e => {
        console.log(e);
      });
  }

  logout() {
    this.fb.logout()
      .then( res => this.isLoggedIn = false)
      .catch(e => console.log('Error logout from Facebook', e));
  }

  googleLogin() {
    if (this.platform.is('cordova')) {
      this.nativeGoogleLogin();
    } else {
      this.webGoogleLogin();
    }
  }

  async nativeGoogleLogin() {
    try {
      const gplusUser = await this.gplus.login({
        'webClientId': '451526680834-6s7p1goef5stqnsgeugipbud9g3bc05e.apps.googleusercontent.com',
        'offline': true,
        'scopes': 'profile email'
      });
      return await this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken));
    } catch(err) {
      console.log(err);
      this.showErrorToast(err);
    }
  }

  async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);
    } catch(err) {
      console.log(err)
    }
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

  async showErrorToast(message) {
    let toast = await this.toast.create({
      message,
      duration: 3000,
      position: 'bottom'
    });

    toast.present();
  }

}
