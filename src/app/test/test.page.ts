import { Component, OnInit } from '@angular/core';

import { Crop } from '@ionic-native/crop/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  image: any;
  imageBase64: any = '';
  croppedImage: any = '';

  constructor(private crop: Crop, private camera: Camera) { }

  ngOnInit() {
  }

  cropUpload() {
    // this.image = '../../assets/images/avenger.jpg';
    this.crop.crop('../../assets/images/avenger.jpg', {quality: 100})
    .then(newImage => {
        console.log('new image path is: ' + newImage);
        this.image = newImage;
    })
    .catch(error => {
      console.log(error);
    });
  }

  imageCropped(image: string) {
      this.croppedImage = 'data:image/jpeg;base64,' + image;
  }
  imageLoaded() {
      // show cropper
  }
  loadImageFailed() {
      // show message
  }

  selectImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then(base64 => {
      this.imageBase64 = 'data:image/jpeg;base64,' + base64;
    })
    .catch(error => {
      alert(error);
    });
  }

}
