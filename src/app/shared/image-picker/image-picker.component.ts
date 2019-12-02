import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { File } from '@ionic-native/file/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
// import {
//   Plugins,
//   Capacitor,
//   CameraSource,
//   CameraResultType
// } from '@capacitor/core';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss'],
})
export class ImagePickerComponent implements OnInit {

  @Output() imagePicked = new EventEmitter<string | File>();
  Image: string;

  constructor(private crop: Crop, private file: File, private base64: Base64, private camera: Camera) {}
  ngOnInit() {}

  onPickImage() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      // const base64Image = 'data:image/jpeg;base64,' + imageData;
      let base64Image = imageData;
      // alert(base64Image);
      // base64Image = 'file://' + base64Image;
      // this.imagePicked.emit(base64Image);
      return this.crop.crop(base64Image, { quality: 100, targetWidth: -1, targetHeight: -1 });

     })
     .then(newImage => {
      alert(newImage);
      return this.base64.encodeFile(newImage.split('?')[0]);
      // this.imagePicked.emit(newImage.split('?')[0]);
     })
     .then(base64 => {
       this.imagePicked.emit(base64);
     })
     .catch(error => {
       console.log(error);
     });

    //  ----------------------------------

    // if (Capacitor.isPluginAvailable('Camera')) {
    //   Plugins.Camera.getPhoto({
    //     quality: 70,
    //     source: CameraSource.Prompt,
    //     correctOrientation: true,
    //     resultType: CameraResultType.Base64
    //   }).then(image => {
    //     this.imagePicked.emit(image.base64String);
    //   }).catch(err => {
    //     console.log(err);
    //   })
    // }
    // const pickedFile = (event.target as HTMLInputElement).files[0];
    // if (!pickedFile) {
    //   return;
    // }
    // const fr = new FileReader();
    // fr.onload = () => {
    //   const dataUrl = fr.result.toString();
    //   this.Image = dataUrl;
    //   this.imagePicked.emit(dataUrl);
    // };
    // fr.readAsDataURL(pickedFile);
  }

  // showCroppedImage(ImagePath) {
  //   var copyPath = ImagePath;
  //   var splitPath = copyPath.split('/');
  //   var imageName = splitPath[splitPath.length - 1];
  //   var filePath = ImagePath.split(imageName)[0];

  //   this.file.readAsDataURL(filePath, imageName).then(base64 => {
  //     this.imagePicked.emit(base64);
  //   }, error => {
  //     alert('Error in showing image' + error);
  //   });
  // }

}
