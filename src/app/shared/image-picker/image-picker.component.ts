import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  Plugins,
  Capacitor,
  CameraSource,
  CameraResultType
} from '@capacitor/core';

@Component({
  selector: 'app-image-picker',
  templateUrl: './image-picker.component.html',
  styleUrls: ['./image-picker.component.scss'],
})
export class ImagePickerComponent implements OnInit {

  @Output() imagePicked = new EventEmitter<string | File>();
  Image: string;

  constructor() { }

  ngOnInit() {}

  onPickImage() {
    if (Capacitor.isPluginAvailable('Camera')) {
      Plugins.Camera.getPhoto({
        quality: 70,
        source: CameraSource.Prompt,
        correctOrientation: true,
        resultType: CameraResultType.Base64
      }).then(image => {
        this.imagePicked.emit(image.base64String);
      }).catch(err => {
        console.log(err);
      })
    }
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

}
