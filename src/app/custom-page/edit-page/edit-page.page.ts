import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef, AfterViewInit, NgZone, Renderer2 } from '@angular/core';
import { CdkDragMove } from '@angular/cdk/drag-drop';
import { ModalController } from '@ionic/angular';

import { ImageModalComponent } from 'src/app/shared/image-modal/image-modal.component';
import { StorageService } from 'src/app/shared/storage.service';
import { StickerModalComponent } from 'src/app/shared/sticker-modal/sticker-modal.component';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.page.html',
  styleUrls: ['./edit-page.page.scss'],
  encapsulation: ViewEncapsulation.None
})

export class EditPagePage implements OnInit, AfterViewInit {

  @ViewChild('elementRef', { static: false }) elementRef;
  @ViewChild('resizeBox', { static: false }) resizeBox: ElementRef;
  @ViewChild('dragHandleCorner', { static: false }) dragHandleCorner: ElementRef;
  @ViewChild('dragHandleRight', { static: false }) dragHandleRight: ElementRef;
  @ViewChild('dragHandleBottom', { static: false }) dragHandleBottom: ElementRef;
  @ViewChild('elementRef1', { static: false }) elementRef1;
  @ViewChild('resizeBox1', { static: false }) resizeBox1: ElementRef;
  @ViewChild('dragHandleCorner1', { static: false }) dragHandleCorner1: ElementRef;
  @ViewChild('dragHandleRight1', { static: false }) dragHandleRight1: ElementRef;
  @ViewChild('dragHandleBottom1', { static: false }) dragHandleBottom1: ElementRef;

  // All dynamically adding text area reference's
  @ViewChild('inputText5', { static: false }) inputText5: ElementRef;
  @ViewChild('inputText4', { static: false }) inputText4: ElementRef;
  @ViewChild('inputText3', { static: false }) inputText3: ElementRef;
  @ViewChild('inputText2', { static: false }) inputText2: ElementRef;
  @ViewChild('inputText1', { static: false }) inputText1: ElementRef;

  drHandle: string = 'test1';
  corn: string = 'test2';
  drHandle1: string = 'test1';
  corn1: string = 'test2';
  imageFile: any;
  selectedImage: boolean = false;

  showToolbar: boolean = true;
  textAreaSize: number = 10;

  constructor(private ngZone: NgZone,
              private modalCtrl: ModalController,
              private storageService: StorageService,
              private renderer: Renderer2,
              private el: ElementRef) {
  }

  ngOnInit() {
    const idName = document.getElementById('example-boundary');
    const width = window.innerWidth;
    const height = window.innerHeight;
    idName.style.width = width  + 'px';
    idName.style.height = height + 'px';
  }

  createElement() {

    // this.elementRef.nativeElement.insertAdjacentHTML('beforeend', `<ion-img src="assets/images/abc.png"></ion-img>`);
    // this.drHandle = 'dragHandle';
    // this.corn = 'corner';

    // this.inputText5.nativeElement.insertAdjacentHTML('beforeend', `<ion-item lines="none">
    // <ion-textarea id="textarea5" autoGrow="true" placeholder="Enter more information here..."></ion-textarea>
    // </ion-item>`);

    // this.elementRef1.nativeElement.insertAdjacentHTML('beforeend', `<ion-img src="assets/images/abc.png"></ion-img>`);
    // this.drHandle1 = 'dragHandle1';
    // this.corn1 = 'corner';

  }

  changeOpacity(event: any) {
    document.querySelector('ion-img').style.opacity = event.detail.value;
  }

  onAddText() {
    let val = 0;
    let count = 0;

    let childElements = this.inputText5.nativeElement.children;
    if (childElements[0]) {
      count += 1;
    } else {
      val = 5;
    }

    childElements = this.inputText4.nativeElement.children;
    if (childElements[0]) {
      count += 1;
    } else {
      val = 4;
    }

    childElements = this.inputText3.nativeElement.children;
    if (childElements[0]) {
      count += 1;
    } else {
      val = 3;
    }

    childElements = this.inputText2.nativeElement.children;
    if (childElements[0]) {
      count += 1;
    } else {
      val = 2;
    }

    childElements = this.inputText1.nativeElement.children;
    if (childElements[0]) {
      count += 1;
    } else {
      val = 1;
    }

    if (count < 5) {
      switch (val) {
        case 5: this.inputText5.nativeElement.insertAdjacentHTML('beforeend', `<ion-item lines="none">
                <ion-textarea id="textarea5" autoGrow="true" placeholder="Enter more information here..."></ion-textarea>
                </ion-item>`);
                break;
        case 4: this.inputText4.nativeElement.insertAdjacentHTML('beforeend', `<ion-item lines="none">
                <ion-textarea id="textarea4" autoGrow="true" placeholder="Enter more information here..."></ion-textarea>
                </ion-item>`);
                break;
        case 3: this.inputText3.nativeElement.insertAdjacentHTML('beforeend', `<ion-item lines="none">
                <ion-textarea id="textarea3" autoGrow="true" placeholder="Enter more information here..."></ion-textarea>
                </ion-item>`);
                break;
        case 2: this.inputText2.nativeElement.insertAdjacentHTML('beforeend', `<ion-item lines="none">
                <ion-textarea id="textarea2" autoGrow="true" placeholder="Enter more information here..."></ion-textarea>
                </ion-item>`);
                break;
        case 1: this.inputText1.nativeElement.insertAdjacentHTML('beforeend', `<ion-item lines="none">
                <ion-textarea id="textarea1" autoGrow="true" placeholder="Enter more information here..."></ion-textarea>
                </ion-item>`);
                break;
      }
    } else {
      // Show alert over here maximum allocation reached
    }
  }

  setNewTextSize(event: any) {
    document.getElementById('textarea5"').style.fontSize = event.detail.value + 'px';
  }

  onLongPressTextArea(event: any, textAreaNo: number) {
    this.storageService.setItemForTextArea(textAreaNo);
    this.showToolbar = false;
  }

  deleteSelectedTextArea() {
    this.storageService.getItemForTextArea().then(value => {
      let childElements;
      switch (+value) {
        case 5: childElements = this.inputText5.nativeElement.children;
                if (childElements[0]) {
                  this.renderer.removeChild(this.inputText5.nativeElement, childElements[0]);
                  this.storageService.removeItemForTextArea();
                  this.showToolbar = true;
                }
                break;
        case 4: childElements = this.inputText4.nativeElement.children;
                if (childElements[0]) {
                  this.renderer.removeChild(this.inputText4.nativeElement, childElements[0]);
                  this.storageService.removeItemForTextArea();
                  this.showToolbar = true;
                }
                break;
        case 3: childElements = this.inputText3.nativeElement.children;
                if (childElements[0]) {
                  this.renderer.removeChild(this.inputText3.nativeElement, childElements[0]);
                  this.storageService.removeItemForTextArea();
                  this.showToolbar = true;
                }
                break;
        case 2: childElements = this.inputText2.nativeElement.children;
                if (childElements[0]) {
                  this.renderer.removeChild(this.inputText2.nativeElement, childElements[0]);
                  this.storageService.removeItemForTextArea();
                  this.showToolbar = true;
                }
                break;
        case 1: childElements = this.inputText1.nativeElement.children;
                if (childElements[0]) {
                  this.renderer.removeChild(this.inputText1.nativeElement, childElements[0]);
                  this.storageService.removeItemForTextArea();
                  this.showToolbar = true;
                }
                break;
      }
    });
  }

  incrementTextSize() {
    this.textAreaSize += 1;
    this.storageService.getItemForTextArea().then(value => {
      switch (+value) {
        case 5: document.getElementById('textarea5').style.fontSize = this.textAreaSize + 'px';
                break;
        case 4: document.getElementById('textarea4').style.fontSize = this.textAreaSize + 'px';
                break;
        case 3: document.getElementById('textarea3').style.fontSize = this.textAreaSize + 'px';
                break;
        case 2: document.getElementById('textarea2').style.fontSize = this.textAreaSize + 'px';
                break;
        case 1: document.getElementById('textarea1').style.fontSize = this.textAreaSize + 'px';
      }
    });
  }

  decrementTextSize() {
    if (this.textAreaSize > 10) {
      this.textAreaSize -= 1;
      this.storageService.getItemForTextArea().then(value => {
        switch (+value) {
          case 5: document.getElementById('textarea5').style.fontSize = this.textAreaSize + 'px';
                  break;
          case 4: document.getElementById('textarea4').style.fontSize = this.textAreaSize + 'px';
                  break;
          case 3: document.getElementById('textarea3').style.fontSize = this.textAreaSize + 'px';
                  break;
          case 2: document.getElementById('textarea2').style.fontSize = this.textAreaSize + 'px';
                  break;
          case 1: document.getElementById('textarea1').style.fontSize = this.textAreaSize + 'px';
        }
      });
    }
  }

  get resizeBoxElement(): HTMLElement {
    return this.resizeBox.nativeElement;
  }

  get dragHandleCornerElement(): HTMLElement {
    return this.dragHandleCorner.nativeElement;
  }

  get dragHandleRightElement(): HTMLElement {
    return this.dragHandleRight.nativeElement;
  }

  get dragHandleBottomElement(): HTMLElement {
    return this.dragHandleBottom.nativeElement;
  }

  get resizeBoxElement1(): HTMLElement {
    return this.resizeBox1.nativeElement;
  }

  get dragHandleCornerElement1(): HTMLElement {
    return this.dragHandleCorner1.nativeElement;
  }

  get dragHandleRightElement1(): HTMLElement {
    return this.dragHandleRight1.nativeElement;
  }

  get dragHandleBottomElement1(): HTMLElement {
    return this.dragHandleBottom1.nativeElement;
  }

  ngAfterViewInit() {
    this.setAllHandleTransform();
  }

  setAllHandleTransform() {
    const rect = this.resizeBoxElement.getBoundingClientRect();
    this.setHandleTransform(this.dragHandleCornerElement, rect, 'both');
    this.setHandleTransform(this.dragHandleRightElement, rect, 'x');
    this.setHandleTransform(this.dragHandleBottomElement, rect, 'y');

    const rect1 = this.resizeBoxElement1.getBoundingClientRect();
    this.setHandleTransform(this.dragHandleCornerElement1, rect1, 'both');
    this.setHandleTransform(this.dragHandleRightElement1, rect1, 'x');
    this.setHandleTransform(this.dragHandleBottomElement1, rect1, 'y');
  }

  setHandleTransform(
    dragHandle: HTMLElement,
    targetRect: ClientRect | DOMRect,
    position: 'x' | 'y' | 'both'
  ) {
    const dragRect = dragHandle.getBoundingClientRect();
    const translateX = targetRect.width - dragRect.width;
    const translateY = targetRect.height - dragRect.height;

    if (position === 'x') {
      dragHandle.style.transform = `translate3d(${translateX}px, 0, 0)`;
    }

    if (position === 'y') {
      dragHandle.style.transform = `translate3d(0, ${translateY}px, 0)`;
    }

    if (position === 'both') {
      dragHandle.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
    }
  }

  dragMove(dragHandle: HTMLElement, $event: CdkDragMove<any>) {
    this.ngZone.runOutsideAngular(() => {
      this.resize(dragHandle, this.resizeBoxElement);
    });
  }

  dragMove1(dragHandle: HTMLElement, $event: CdkDragMove<any>) {
    this.ngZone.runOutsideAngular(() => {
      this.resize(dragHandle, this.resizeBoxElement1);
    });
  }

  resize(dragHandle: HTMLElement, target: HTMLElement) {
    const dragRect = dragHandle.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    const width = dragRect.left - targetRect.left + dragRect.width;
    const height = dragRect.top - targetRect.top + dragRect.height;

    target.style.width = width + 'px';
    target.style.height = height + 'px';

    this.setAllHandleTransform();
  }

  choosenImage(imageData: string | File) {
    this.selectedImage = true;
    if (typeof imageData === 'string') {
      try {
        this.imageFile = imageData;
      } catch (error) {
        console.log(error);
        return;
      }
    } else {
      this.imageFile = imageData;
    }

    this.modalCtrl.create({
      component: ImageModalComponent,
      componentProps: { pickedImage: this.imageFile }
    }).then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    })
      .then(result => {
        if (result.role === 'confirm') {
          this.elementRef.nativeElement.insertAdjacentHTML('beforeend', `<ion-img src=${result.data.croppedImage}></ion-img>`);
          this.drHandle = 'dragHandle';
          this.corn = 'corner';
        }
      });
  }

  // selectSticker() {
  //   this.modalCtrl.create({
  //     component: StickerModalComponent
  //   }).then(modalEl => {
  //     modalEl.present();
  //   });
  // }
  selectSticker() {
    this.modalCtrl.create({
      component: StickerModalComponent,
      cssClass: 'translucent-modal'
    }).then(modalEl => {
      modalEl.present();
    });
  }

  closeTextAreaSizeView() {
    this.storageService.removeItemForTextArea();
    this.showToolbar = true;
  }

  checkmarkTextAreaSizeView() {
    this.storageService.getItemForTextArea().then(value => {
      switch (+value) {
        case 5: this.storageService.removeItemForTextArea();
                this.showToolbar = true;
                break;
        case 4: this.storageService.removeItemForTextArea();
                this.showToolbar = true;
                break;
        case 3: this.storageService.removeItemForTextArea();
                this.showToolbar = true;
                break;
        case 2: this.storageService.removeItemForTextArea();
                this.showToolbar = true;
                break;
        case 1: this.storageService.removeItemForTextArea();
                this.showToolbar = true;
      }
    });
  }
}

