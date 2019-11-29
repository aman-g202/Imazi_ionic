import { Component, OnInit } from '@angular/core';
import { StorageService } from '../shared/storage.service';
import { environment } from 'src/environments/environment.prod';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private storageService: StorageService,
    public loadingController: LoadingController,

  ) {}

  user:any;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  ngOnInit() {
    this.fetchData();
  }

  ionViewWillEnter() {
    this.fetchData();
  }

  async fetchData() {
    const result = await this.storageService.getDataFromStorage(environment.userData);
    this.user = await JSON.parse(result);
  }

  logout() {

  }

}
