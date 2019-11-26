import { Component, OnInit } from '@angular/core';
import { StorageService } from '../shared/storage.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private storageService: StorageService
  ) {}

  user:any;

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  ngOnInit() {
    this.fetchData();
  }

  async fetchData() {
    const result = await this.storageService.getDataFromStorgae(environment.userData);
    this.user = JSON.parse(result);
  }

  logout() {

  }

}
