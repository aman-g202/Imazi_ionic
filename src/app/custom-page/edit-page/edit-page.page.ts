import { Component, OnInit, ViewChild } from '@angular/core';
import { CameraOptions, Camera } from '@ionic-native/camera/ngx';
import { Event } from '@angular/router';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.page.html',
  styleUrls: ['./edit-page.page.scss'],
})
export class EditPagePage implements OnInit {

  @ViewChild ('elementRef', {static: false}) elementRef;

  constructor(private camera: Camera, private dragula: DragulaService, private toastController: ToastController) {
  }

  ngOnInit() {

  }
  createElement() {
      console.log(this.elementRef.nativeElement);
      this.elementRef.nativeElement.appeendChild(` <div class="example-box" cdkDragBoundary=".example-boundary" cdkDrag>
      I can only be dragged within the dotted container
    </div>`);
    }


  changeOpacity(event: any) {
    document.querySelector("ion-img").style.opacity = event.detail.value;
  }

}
