import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sticker-modal',
  templateUrl: './sticker-modal.component.html',
  styleUrls: ['./sticker-modal.component.scss'],
})
export class StickerModalComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  closeModal() {
    this.modalCtrl.dismiss();
  }

}
