import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AngularCropperjsComponent } from 'angular-cropperjs';

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss'],
})
export class ImageModalComponent implements OnInit {

  @Input() pickedImage: string | File;
  @Input() cropArea: any;
  @ViewChild('angularCropper', { static: false }) public angularCropper: AngularCropperjsComponent;
  cropperOptions: any;
  croppedImage = null;

  scaleValX = 1;
  scaleValY = 1;

  constructor(private modalCtrl: ModalController) {
    this.cropperOptions = {
      dragMode: 'crop',
      aspectRatio: this.cropArea,
      // autoCrop: true,
      // movable: true,
      zoomable: true,
      scalable: true,
      // autoCropArea: 0.8
    };
  }

  ngOnInit() {}

  reset() {
    this.angularCropper.cropper.reset();
  }

  clear() {
    this.angularCropper.cropper.clear();
  }

  rotate() {
    this.angularCropper.cropper.rotate(90);
  }

  zoom(zoomIn: boolean) {
    const factor = zoomIn ? 0.1 : -0.1;
    this.angularCropper.cropper.zoom(factor);
  }

  scaleX() {
    this.scaleValX = this.scaleValX * -1;
    this.angularCropper.cropper.scaleX(this.scaleValX);
  }

  scaleY() {
    this.scaleValY = this.scaleValY * -1;
    this.angularCropper.cropper.scaleY(this.scaleValY);
  }

  move(x, y) {
    this.angularCropper.cropper.move(x, y);
  }

  setDrag() {
    this.angularCropper.cropper.setDragMode('move');
  }

  setCrop() {
    this.angularCropper.cropper.setDragMode('crop');
  }

  save() {
    const croppedImgB64String: string = this.angularCropper.cropper.getCroppedCanvas().toDataURL('image/jpeg', (100 / 100));
    this.croppedImage = croppedImgB64String;
  }

  closeModal() {
    this.modalCtrl.dismiss({
      croppedImage: this.croppedImage
    }, 'confirm');
  }

}
