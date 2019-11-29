import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Facebook } from '@ionic-native/facebook/ngx';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { IonicGestureConfig } from './utils/IonicGestureConfig';
import { HttpClientModule } from '@angular/common/http';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
const firebaseConfig = {
  apiKey: "AIzaSyA26R-RSDXSS-MAW5x07Oor9GIurtR7prw",
  authDomain: "imazi-4ea1c.firebaseapp.com",
  databaseURL: "https://imazi-4ea1c.firebaseio.com",
  projectId: "imazi-4ea1c",
  storageBucket: "imazi-4ea1c.appspot.com",
  messagingSenderId: "1076970739044",
  appId: "1:1076970739044:web:03b4e5483875e2fea79671",
  measurementId: "G-SGT2NGMH2X"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, DragDropModule, HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig), AngularFireAuthModule],
  providers: [
    StatusBar,
    SplashScreen,
    GooglePlus,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Facebook,
    {provide: HAMMER_GESTURE_CONFIG, useClass: IonicGestureConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
