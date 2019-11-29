import { Component, OnInit } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { Platform, ToastController, LoadingController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { StorageService } from '../shared/storage.service';
import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { dismiss } from '@ionic/core/dist/types/utils/overlays';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  isLoggedIn = false;
  users = { id: '', name: '', email: '', picture: { data: { url: '' } } };
  user: Observable<firebase.User>;
  loading:any;
  mobile = '';

  constructor(
    private afAuth: AngularFireAuth,
    private fb: Facebook,
    private gplus: GooglePlus,
    private platform: Platform,
    private storageService: StorageService,
    private router: Router,
    private toast: ToastController,
    public loadingController: LoadingController
    ) {
      // this.user = this.afAuth.authState;
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
    this.presentLoading();
    this.checkData();
  }

  ionViewWillEnter() {
  }

  presentLoading() {
    this.loading = this.loadingController.create({
      message: 'Connecting...',
      duration : 3000
    }).then((res) => {
      res.present();
    });
  }

  async checkData() {
    // __zone_symbol__value
    const data = await this.storageService.getDataFromStorage(environment.userData);
    console.log(data);
    if (data !== null) {
      await this.router.navigate(['/home']);
    }
    // await this.loadingController.dismiss();
  }

  fbLogin() {
    const number = new String(this.mobile);
    if(number.length === 10) {
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
    } else {
      this.showErrorToast('Enter a valid number');
    }
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
    const number = new String(this.mobile);
    if (number.length === 10 ) {
      if (this.platform.is('cordova')) {
        this.nativeGoogleLogin();
      } else {
        this.webGoogleLogin();
      }
    } else {
      this.showErrorToast('Enter a valid number');
    }
  }

  async nativeGoogleLogin() {
    try {
      await this.gplus.login({
        'webClientId': '1076970739044-enlflntb4n46uvvaiglbjrtg4uis3283.apps.googleusercontent.com',
        'offline': true,
        'scopes': 'profile email'
      }).then(
        (response) => {
          console.log('here');
          const { idToken, accessToken } = response;
          this.onLoginSuccess(idToken, accessToken);
      }).catch((error) => {
        console.log(error)
        this.showErrorToast('error:' + JSON.stringify(error));
        }
      );
      // return await this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken));
    } catch(err) {
      console.log(err);
      this.showErrorToast(err);
    }
  }

  onLoginSuccess(accessToken, accessSecret) {
    const credential = accessSecret ? firebase.auth.GoogleAuthProvider
        .credential(accessToken, accessSecret) : firebase.auth.GoogleAuthProvider
            .credential(accessToken);
    this.afAuth.auth.signInWithCredential(credential)
      .then((res) => {
        console.log(res);
        const result = { id: '', name: res.user.displayName , email: res.user.email, picture: { data: { url: res.user.photoURL } } };
        this.storageService.setDataToStorage(environment.userData, JSON.stringify(result));
        this.router.navigate(['/home']);
      });

  }

  async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider).then(
        res => {
          const result = { id: '', name: res.user.displayName , email: res.user.email, picture: { data: { url: res.user.photoURL } } };
          this.storageService.setDataToStorage(environment.userData, JSON.stringify(result));
          this.router.navigate(['/home']);
        }
      );
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
