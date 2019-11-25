import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StickerService, StickerResponse } from './sticker.service';

@Component({
  selector: 'app-sticker-modal',
  templateUrl: './sticker-modal.component.html',
  styleUrls: ['./sticker-modal.component.scss'],
})
export class StickerModalComponent implements OnInit {

  stickersArray: StickerResponse[] = [];

  constructor(private modalCtrl: ModalController, private stickerService: StickerService) { }

  ngOnInit() {
    this.stickerService.fetchStickers().subscribe(responseData => {
      this.stickersArray = responseData;
    }, error => {
      console.log('sticker component: ', error);
    });
  }

  closeModal() {
    this.modalCtrl.dismiss();
  }

  searchSticker(event: any) {
    this.stickersArray = this.stickerService.searchSticker(event.detail.value);
  }

  onSelectedImage(stickerUrl: string, id: string) {
    // console.log(stickerUrl, id);
    this.modalCtrl.dismiss({
      stickerUrl,
      id
    }, 'confirm');
  }

}
