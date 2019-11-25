import { Component, OnInit, ViewChild, ViewEncapsulation, ElementRef, AfterViewInit, NgZone, Renderer2 } from '@angular/core';
import { CdkDragMove } from '@angular/cdk/drag-drop';
import { ModalController, Platform } from '@ionic/angular';

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

  // All dynamically adding image reference's
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

  @ViewChild('elementRef2', { static: false }) elementRef2;
  @ViewChild('resizeBox2', { static: false }) resizeBox2: ElementRef;
  @ViewChild('dragHandleCorner2', { static: false }) dragHandleCorner2: ElementRef;
  @ViewChild('dragHandleRight2', { static: false }) dragHandleRight2: ElementRef;
  @ViewChild('dragHandleBottom2', { static: false }) dragHandleBottom2: ElementRef;

  @ViewChild('elementRef3', { static: false }) elementRef3;
  @ViewChild('resizeBox3', { static: false }) resizeBox3: ElementRef;
  @ViewChild('dragHandleCorner3', { static: false }) dragHandleCorner3: ElementRef;
  @ViewChild('dragHandleRight3', { static: false }) dragHandleRight3: ElementRef;
  @ViewChild('dragHandleBottom3', { static: false }) dragHandleBottom3: ElementRef;

  @ViewChild('elementRef4', { static: false }) elementRef4;
  @ViewChild('resizeBox4', { static: false }) resizeBox4: ElementRef;
  @ViewChild('dragHandleCorner4', { static: false }) dragHandleCorner4: ElementRef;
  @ViewChild('dragHandleRight4', { static: false }) dragHandleRight4: ElementRef;
  @ViewChild('dragHandleBottom4', { static: false }) dragHandleBottom4: ElementRef;

  @ViewChild('elementRef5', { static: false }) elementRef5;
  @ViewChild('resizeBox5', { static: false }) resizeBox5: ElementRef;
  @ViewChild('dragHandleCorner5', { static: false }) dragHandleCorner5: ElementRef;
  @ViewChild('dragHandleRight5', { static: false }) dragHandleRight5: ElementRef;
  @ViewChild('dragHandleBottom5', { static: false }) dragHandleBottom5: ElementRef;

  @ViewChild('elementRef6', { static: false }) elementRef6;
  @ViewChild('resizeBox6', { static: false }) resizeBox6: ElementRef;
  @ViewChild('dragHandleCorner6', { static: false }) dragHandleCorner6: ElementRef;
  @ViewChild('dragHandleRight6', { static: false }) dragHandleRight6: ElementRef;
  @ViewChild('dragHandleBottom6', { static: false }) dragHandleBottom6: ElementRef;

  @ViewChild('elementRef7', { static: false }) elementRef7;
  @ViewChild('resizeBox7', { static: false }) resizeBox7: ElementRef;
  @ViewChild('dragHandleCorner7', { static: false }) dragHandleCorner7: ElementRef;
  @ViewChild('dragHandleRight7', { static: false }) dragHandleRight7: ElementRef;
  @ViewChild('dragHandleBottom7', { static: false }) dragHandleBottom7: ElementRef;

  // All dynamically adding sticker reference's
  @ViewChild('elementRef9', { static: false }) elementRef9;
  @ViewChild('resizeBox9', { static: false }) resizeBox9: ElementRef;
  @ViewChild('dragHandleCorner9', { static: false }) dragHandleCorner9: ElementRef;
  @ViewChild('dragHandleRight9', { static: false }) dragHandleRight9: ElementRef;
  @ViewChild('dragHandleBottom9', { static: false }) dragHandleBottom9: ElementRef;

  @ViewChild('elementRef10', { static: false }) elementRef10;
  @ViewChild('resizeBox10', { static: false }) resizeBox10: ElementRef;
  @ViewChild('dragHandleCorner10', { static: false }) dragHandleCorner10: ElementRef;
  @ViewChild('dragHandleRight10', { static: false }) dragHandleRight10: ElementRef;
  @ViewChild('dragHandleBottom10', { static: false }) dragHandleBottom10: ElementRef;

  @ViewChild('elementRef11', { static: false }) elementRef11;
  @ViewChild('resizeBox11', { static: false }) resizeBox11: ElementRef;
  @ViewChild('dragHandleCorner11', { static: false }) dragHandleCorner11: ElementRef;
  @ViewChild('dragHandleRight11', { static: false }) dragHandleRight11: ElementRef;
  @ViewChild('dragHandleBottom11', { static: false }) dragHandleBottom11: ElementRef;

  @ViewChild('elementRef12', { static: false }) elementRef12;
  @ViewChild('resizeBox12', { static: false }) resizeBox12: ElementRef;
  @ViewChild('dragHandleCorner12', { static: false }) dragHandleCorner12: ElementRef;
  @ViewChild('dragHandleRight12', { static: false }) dragHandleRight12: ElementRef;
  @ViewChild('dragHandleBottom12', { static: false }) dragHandleBottom12: ElementRef;

  @ViewChild('elementRef13', { static: false }) elementRef13;
  @ViewChild('resizeBox13', { static: false }) resizeBox13: ElementRef;
  @ViewChild('dragHandleCorner13', { static: false }) dragHandleCorner13: ElementRef;
  @ViewChild('dragHandleRight13', { static: false }) dragHandleRight13: ElementRef;
  @ViewChild('dragHandleBottom13', { static: false }) dragHandleBottom13: ElementRef;

  @ViewChild('elementRef14', { static: false }) elementRef14;
  @ViewChild('resizeBox14', { static: false }) resizeBox14: ElementRef;
  @ViewChild('dragHandleCorner14', { static: false }) dragHandleCorner14: ElementRef;
  @ViewChild('dragHandleRight14', { static: false }) dragHandleRight14: ElementRef;
  @ViewChild('dragHandleBottom14', { static: false }) dragHandleBottom14: ElementRef;

  @ViewChild('elementRef15', { static: false }) elementRef15;
  @ViewChild('resizeBox15', { static: false }) resizeBox15: ElementRef;
  @ViewChild('dragHandleCorner15', { static: false }) dragHandleCorner15: ElementRef;
  @ViewChild('dragHandleRight15', { static: false }) dragHandleRight15: ElementRef;
  @ViewChild('dragHandleBottom15', { static: false }) dragHandleBottom15: ElementRef;

  @ViewChild('elementRef16', { static: false }) elementRef16;
  @ViewChild('resizeBox16', { static: false }) resizeBox16: ElementRef;
  @ViewChild('dragHandleCorner16', { static: false }) dragHandleCorner16: ElementRef;
  @ViewChild('dragHandleRight16', { static: false }) dragHandleRight16: ElementRef;
  @ViewChild('dragHandleBottom16', { static: false }) dragHandleBottom16: ElementRef;

  // All dynamically adding text area reference's
  @ViewChild('inputText8', { static: false }) inputText8: ElementRef;
  @ViewChild('inputText7', { static: false }) inputText7: ElementRef;
  @ViewChild('inputText6', { static: false }) inputText6: ElementRef;
  @ViewChild('inputText5', { static: false }) inputText5: ElementRef;
  @ViewChild('inputText4', { static: false }) inputText4: ElementRef;
  @ViewChild('inputText3', { static: false }) inputText3: ElementRef;
  @ViewChild('inputText2', { static: false }) inputText2: ElementRef;
  @ViewChild('inputText1', { static: false }) inputText1: ElementRef;

  drHandle: string = 'test1';
  corn: string = 'test2';
  drHandle1: string = 'test1';
  corn1: string = 'test2';
  drHandle2: string = 'test1';
  corn2: string = 'test2';
  drHandle3: string = 'test1';
  corn3: string = 'test2';
  drHandle4: string = 'test1';
  corn4: string = 'test2';
  drHandle5: string = 'test1';
  corn5: string = 'test2';
  drHandle6: string = 'test1';
  corn6: string = 'test2';
  drHandle7: string = 'test1';
  corn7: string = 'test2';

  drHandle9: string = 'test1';
  corn9: string = 'test2';
  drHandle10: string = 'test1';
  corn10: string = 'test2';
  drHandle11: string = 'test1';
  corn11: string = 'test2';
  drHandle12: string = 'test1';
  corn12: string = 'test2';
  drHandle13: string = 'test1';
  corn13: string = 'test2';
  drHandle14: string = 'test1';
  corn14: string = 'test2';
  drHandle15: string = 'test1';
  corn15: string = 'test2';
  drHandle16: string = 'test1';
  corn16: string = 'test2';

  imagediv: boolean = true;
  imagediv1: boolean = true;
  imagediv2: boolean = true;
  imagediv3: boolean = true;
  imagediv4: boolean = true;
  imagediv5: boolean = true;
  imagediv6: boolean = true;
  imagediv7: boolean = true;

  stickerdiv9: boolean = true;
  stickerdiv10: boolean = true;
  stickerdiv11: boolean = true;
  stickerdiv12: boolean = true;
  stickerdiv13: boolean = true;
  stickerdiv14: boolean = true;
  stickerdiv15: boolean = true;
  stickerdiv16: boolean = true;

  textareadiv1: boolean = true;
  textareadiv2: boolean = true;
  textareadiv3: boolean = true;
  textareadiv4: boolean = true;
  textareadiv5: boolean = true;
  textareadiv6: boolean = true;
  textareadiv7: boolean = true;
  textareadiv8: boolean = true;

  imageFile: any;
  selectedImage: boolean = false;

  showToolbar: boolean = true;
  showImageToolBar: boolean = false;
  showStickerToolBar: boolean = false;
  showTextToolbar: boolean = false;
  textAreaSize: number = 10;

  disabledBtn: boolean = true;

  constructor(private ngZone: NgZone,
              private modalCtrl: ModalController,
              private storageService: StorageService,
              private renderer: Renderer2,
              private el: ElementRef,
              private platform: Platform) {

  }

  ngOnInit() {
    const idName = document.getElementById('example-boundary');
    const width = this.platform.width();
    const height = this.platform.width();
    const deviceHeight = this.platform.height();
    idName.style.width = width  + 'px';
    idName.style.height = height  + 'px';
    idName.style.top = ((deviceHeight - 150) - height) / 2  + 'px';
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
    this.storageService.getItemForImage().then(value => {
      console.log('opacity value', value);
      switch (+value) {
        case 7: this.renderer.setStyle(this.elementRef7.nativeElement, 'opacity', event.detail.value);
                break;
        case 6: this.renderer.setStyle(this.elementRef6.nativeElement, 'opacity', event.detail.value);
                break;
        case 5: this.renderer.setStyle(this.elementRef5.nativeElement, 'opacity', event.detail.value);
                break;
        case 4: this.renderer.setStyle(this.elementRef4.nativeElement, 'opacity', event.detail.value);
                break;
        case 3: this.renderer.setStyle(this.elementRef3.nativeElement, 'opacity', event.detail.value);
                break;
        case 2: this.renderer.setStyle(this.elementRef2.nativeElement, 'opacity', event.detail.value);
                break;
        case 1: this.renderer.setStyle(this.elementRef1.nativeElement, 'opacity', event.detail.value);
                break;
        case 0: this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', event.detail.value);
      }
    });
  }

  changeWidth(event: any) {
    this.storageService.getItemForTextArea().then(value => {
      switch (+value) {
        case 8: document.getElementById('textBackProp8').style.width = event.detail.value + '%';
                break;
        case 7: document.getElementById('textBackProp7').style.width = event.detail.value + '%';
                break;
        case 6: document.getElementById('textBackProp6').style.width = event.detail.value + '%';
                break;
        case 5: document.getElementById('textBackProp5').style.width = event.detail.value + '%';
                break;
        case 4: document.getElementById('textBackProp4').style.width = event.detail.value + '%';
                break;
        case 3: document.getElementById('textBackProp3').style.width = event.detail.value + '%';
                break;
        case 2: document.getElementById('textBackProp2').style.width = event.detail.value + '%';
                break;
        case 1: document.getElementById('textBackProp1').style.width = event.detail.value + '%';
      }
    });
  }

  changeHeight(event: any) {
    this.storageService.getItemForTextArea().then(value => {
      switch (+value) {
        case 8: document.getElementById('textarea8').rows = event.detail.value;
                break;
        case 7: document.getElementById('textarea7').rows = event.detail.value;
                break;
        case 6: document.getElementById('textarea6').rows = event.detail.value;
                break;
        case 5: document.getElementById('textarea5').rows = event.detail.value;
                break;
        case 4: document.getElementById('textarea4').rows = event.detail.value;
                break;
        case 3: document.getElementById('textarea3').rows = event.detail.value;
                break;
        case 2: document.getElementById('textarea2').rows = event.detail.value;
                break;
        case 1: document.getElementById('textarea1').rows = event.detail.value;
      }
      // switch (+value) {
      //   case 8: document.getElementById('textBackProp8').style.height = event.detail.value + '%';
      //           break;
      //   case 7: document.getElementById('textBackProp7').style.height = event.detail.value + '%';
      //           break;
      //   case 6: document.getElementById('textBackProp6').style.height = event.detail.value + '%';
      //           break;
      //   case 5: document.getElementById('textBackProp5').style.height = event.detail.value + '%';
      //           break;
      //   case 4: document.getElementById('textBackProp4').style.height = event.detail.value + '%';
      //           break;
      //   case 3: document.getElementById('textBackProp3').style.height = event.detail.value + '%';
      //           break;
      //   case 2: document.getElementById('textBackProp2').style.height = event.detail.value + '%';
      //           break;
      //   case 1: document.getElementById('textBackProp1').style.height = event.detail.value + '%';
      // }
    });
  }

  onAddText() {
    let val = 0;
    let count = 0;

    let childElements = this.inputText8.nativeElement.children;
    if (childElements[0]) {
      count += 1;
    } else {
      val = 8;
    }

    childElements = this.inputText7.nativeElement.children;
    if (childElements[0]) {
      count += 1;
    } else {
      val = 7;
    }

    childElements = this.inputText6.nativeElement.children;
    if (childElements[0]) {
      count += 1;
    } else {
      val = 6;
    }

    childElements = this.inputText5.nativeElement.children;
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

    if (count < 8) {
      switch (val) {
        case 8: this.textareadiv8 = false;
                this.inputText8.nativeElement.insertAdjacentHTML('beforeend', `<ion-item lines="none">
                <ion-textarea id="textarea8" autoGrow="true" placeholder="Enter text here..."></ion-textarea>
                </ion-item>`);
                break;
        case 7: this.textareadiv7 = false;
                this.inputText7.nativeElement.insertAdjacentHTML('beforeend', `<ion-item lines="none">
                <ion-textarea id="textarea7" autoGrow="true" placeholder="Enter text here..."></ion-textarea>
                </ion-item>`);
                break;
        case 6: this.textareadiv6 = false;
                this.inputText6.nativeElement.insertAdjacentHTML('beforeend', `<ion-item lines="none">
                <ion-textarea id="textarea6" autoGrow="true" placeholder="Enter text here..."></ion-textarea>
                </ion-item>`);
                break;
        case 5: this.textareadiv5 = false;
                this.inputText5.nativeElement.insertAdjacentHTML('beforeend', `<ion-item lines="none">
                <ion-textarea id="textarea5" autoGrow="true" placeholder="Enter text here..."></ion-textarea>
                </ion-item>`);
                break;
        case 4: this.textareadiv4 = false;
                this.inputText4.nativeElement.insertAdjacentHTML('beforeend', `<ion-item lines="none">
                <ion-textarea id="textarea4" autoGrow="true" placeholder="Enter text here..."></ion-textarea>
                </ion-item>`);
                break;
        case 3: this.textareadiv3 = false;
                this.inputText3.nativeElement.insertAdjacentHTML('beforeend', `<ion-item lines="none">
                <ion-textarea id="textarea3" autoGrow="true" placeholder="Enter text here..."></ion-textarea>
                </ion-item>`);
                break;
        case 2: this.textareadiv2 = false;
                this.inputText2.nativeElement.insertAdjacentHTML('beforeend', `<ion-item lines="none">
                <ion-textarea id="textarea2" autoGrow="true" placeholder="Enter text here..."></ion-textarea>
                </ion-item>`);
                break;
        case 1: this.textareadiv1 = false;
                this.inputText1.nativeElement.insertAdjacentHTML('beforeend', `
                <ion-textarea id="textarea1" autoGrow="true" placeholder="Enter text here..." rows="1"></ion-textarea>
                `);
                console.log('aman');
                break;
        // case 1: this.textareadiv1 = false;
        //         this.inputText1.nativeElement.insertAdjacentHTML('beforeend', `<ion-item lines="none">
        //         <ion-textarea id="textarea1" autoGrow="true" placeholder="Enter text here..." rows="1"></ion-textarea>
        //         </ion-item>`);
        //         console.log('aman');
        //         break;
      }
    } else {
      // Show alert over here maximum allocation reached
    }
  }

  onLongPressTextArea(event: any, textAreaNo: number) {
    this.storageService.setItemForTextArea(textAreaNo);
    this.showTextToolbar = true;
    this.showToolbar = false;
    this.showStickerToolBar = false;
    this.showImageToolBar = false;
  }

  onLongPressImage(event: any, ImageNo: number) {
    this.storageService.setItemForImage(ImageNo);
    console.log('longPress', ImageNo);
    this.showImageToolBar = true;
    this.showToolbar = false;
    this.showStickerToolBar = false;
    this.showTextToolbar = false;
  }

  onLongPressSticker(event: any, StickerNo: number) {
    console.log('aman', StickerNo);
    this.storageService.setItemForSticker(StickerNo);
    this.showStickerToolBar = true;
    this.showToolbar = false;
    this.showTextToolbar = false;
    this.showImageToolBar = false;
  }

  deleteSelectedTextArea() {
    this.storageService.getItemForTextArea().then(value => {
      let childElements;
      this.showTextToolbar = false;
      switch (+value) {
        case 8: childElements = this.inputText8.nativeElement.children;
                if (childElements[0]) {
                  this.renderer.removeChild(this.inputText8.nativeElement, childElements[0]);
                  this.textareadiv8 = true;
                  this.storageService.removeItemForTextArea();
                  this.showToolbar = true;
                }
                break;
        case 7: childElements = this.inputText7.nativeElement.children;
                if (childElements[0]) {
                  this.renderer.removeChild(this.inputText7.nativeElement, childElements[0]);
                  this.textareadiv7 = true;
                  this.storageService.removeItemForTextArea();
                  this.showToolbar = true;
                }
                break;
        case 6: childElements = this.inputText6.nativeElement.children;
                if (childElements[0]) {
                  this.renderer.removeChild(this.inputText6.nativeElement, childElements[0]);
                  this.textareadiv6 = true;
                  this.storageService.removeItemForTextArea();
                  this.showToolbar = true;
                }
                break;
        case 5: childElements = this.inputText5.nativeElement.children;
                if (childElements[0]) {
                  this.renderer.removeChild(this.inputText5.nativeElement, childElements[0]);
                  this.textareadiv5 = true;
                  this.storageService.removeItemForTextArea();
                  this.showToolbar = true;
                }
                break;
        case 4: childElements = this.inputText4.nativeElement.children;
                if (childElements[0]) {
                  this.renderer.removeChild(this.inputText4.nativeElement, childElements[0]);
                  this.textareadiv4 = true;
                  this.storageService.removeItemForTextArea();
                  this.showToolbar = true;
                }
                break;
        case 3: childElements = this.inputText3.nativeElement.children;
                if (childElements[0]) {
                  this.renderer.removeChild(this.inputText3.nativeElement, childElements[0]);
                  this.textareadiv3 = true;
                  this.storageService.removeItemForTextArea();
                  this.showToolbar = true;
                }
                break;
        case 2: childElements = this.inputText2.nativeElement.children;
                if (childElements[0]) {
                  this.renderer.removeChild(this.inputText2.nativeElement, childElements[0]);
                  this.textareadiv2 = false;
                  this.storageService.removeItemForTextArea();
                  this.showToolbar = true;
                }
                break;
        case 1: childElements = this.inputText1.nativeElement.children;
                if (childElements[0]) {
                  this.renderer.removeChild(this.inputText1.nativeElement, childElements[0]);
                  this.textareadiv1 = true;
                  this.storageService.removeItemForTextArea();
                  this.showToolbar = true;
                }
                break;
      }
    });
  }

  deleteSelectedImage() {
    this.storageService.getItemForImage().then(value => {
      console.log("delete Image", value);
      let childElements;
      switch (+value) {
        case 7: childElements = this.elementRef7.nativeElement.children;
                if (childElements[3]) {
                  this.renderer.removeChild(this.elementRef7.nativeElement, childElements[3]);
                  this.drHandle7 = 'test1';
                  this.corn7 = 'test2';
                  this.imagediv7 = true;
                  this.storageService.removeItemForImage();
                  this.showImageToolBar = false;
                }
                break;
        case 6: childElements = this.elementRef6.nativeElement.children;
                if (childElements[3]) {
                  this.renderer.removeChild(this.elementRef6.nativeElement, childElements[3]);
                  this.drHandle6 = 'test1';
                  this.corn6 = 'test2';
                  this.imagediv6 = true;
                  this.storageService.removeItemForImage();
                  this.showImageToolBar = false;
                }
                break;
        case 5: childElements = this.elementRef5.nativeElement.children;
                if (childElements[3]) {
                  this.renderer.removeChild(this.elementRef5.nativeElement, childElements[3]);
                  this.drHandle5 = 'test1';
                  this.corn5 = 'test2';
                  this.imagediv5 = true;
                  this.storageService.removeItemForImage();
                  this.showImageToolBar = false;
                }
                break;
        case 4: childElements = this.elementRef4.nativeElement.children;
                if (childElements[3]) {
                  this.renderer.removeChild(this.elementRef4.nativeElement, childElements[3]);
                  this.drHandle4 = 'test1';
                  this.corn4 = 'test2';
                  this.imagediv4 = true;
                  this.storageService.removeItemForImage();
                  this.showImageToolBar = false;
                }
                break;
        case 3: childElements = this.elementRef3.nativeElement.children;
                if (childElements[3]) {
                  this.renderer.removeChild(this.elementRef3.nativeElement, childElements[3]);
                  this.drHandle3 = 'test1';
                  this.corn3 = 'test2';
                  this.imagediv3 = true;
                  this.storageService.removeItemForImage();
                  this.showImageToolBar = false;
                }
                break;
        case 2: childElements = this.elementRef2.nativeElement.children;
                if (childElements[3]) {
                  this.renderer.removeChild(this.elementRef2.nativeElement, childElements[3]);
                  this.drHandle2 = 'test1';
                  this.corn2 = 'test2';
                  this.imagediv2 = true;
                  this.storageService.removeItemForImage();
                  this.showImageToolBar = false;
                }
                break;
        case 1: childElements = this.elementRef1.nativeElement.children;
                if (childElements[3]) {
                  this.renderer.removeChild(this.elementRef1.nativeElement, childElements[3]);
                  this.drHandle1 = 'test1';
                  this.corn1 = 'test2';
                  this.imagediv1 = true;
                  this.storageService.removeItemForImage();
                  this.showImageToolBar = false;
                }
                break;
        case 0: childElements = this.elementRef.nativeElement.children;
                if (childElements[3]) {
                  this.renderer.removeChild(this.elementRef.nativeElement, childElements[3]);
                  this.drHandle = 'test1';
                  this.corn = 'test2';
                  this.imagediv = true;
                  this.storageService.removeItemForImage();
                  this.showImageToolBar = false;
                }
                break;
      }
    });
  }

  deleteSelectedSticker() {
    console.log('aman');
    this.storageService.getItemForSticker().then(value => {
      console.log(value);
      let childElements;
      switch (+value) {
        case 16: childElements = this.elementRef16.nativeElement.children;
                 if (childElements[3]) {
                  this.renderer.removeChild(this.elementRef16.nativeElement, childElements[3]);
                  this.drHandle16 = 'test1';
                  this.corn16 = 'test2';
                  this.stickerdiv16 = true;
                  this.storageService.removeItemForSticker();
                  this.showStickerToolBar = false;
                 }
                 break;
        case 15: childElements = this.elementRef15.nativeElement.children;
                 if (childElements[3]) {
                  this.renderer.removeChild(this.elementRef15.nativeElement, childElements[3]);
                  this.drHandle15 = 'test1';
                  this.corn15 = 'test2';
                  this.stickerdiv15 = true;
                  this.storageService.removeItemForSticker();
                  this.showStickerToolBar = false;
                 }
                 break;
        case 14: childElements = this.elementRef14.nativeElement.children;
                 if (childElements[3]) {
                  this.renderer.removeChild(this.elementRef14.nativeElement, childElements[3]);
                  this.drHandle14 = 'test1';
                  this.corn14 = 'test2';
                  this.stickerdiv14 = true;
                  this.storageService.removeItemForSticker();
                  this.showStickerToolBar = false;
                 }
                 break;
        case 13: childElements = this.elementRef13.nativeElement.children;
                 if (childElements[3]) {
                  this.renderer.removeChild(this.elementRef13.nativeElement, childElements[3]);
                  this.drHandle13 = 'test1';
                  this.corn13 = 'test2';
                  this.stickerdiv13 = true;
                  this.storageService.removeItemForSticker();
                  this.showStickerToolBar = false;
                 }
                 break;
        case 12: childElements = this.elementRef12.nativeElement.children;
                 if (childElements[3]) {
                  this.renderer.removeChild(this.elementRef12.nativeElement, childElements[3]);
                  this.drHandle12 = 'test1';
                  this.corn12 = 'test2';
                  this.stickerdiv12 = true;
                  this.storageService.removeItemForSticker();
                  this.showStickerToolBar = false;
                 }
                 break;
        case 11: childElements = this.elementRef11.nativeElement.children;
                 if (childElements[3]) {
                  this.renderer.removeChild(this.elementRef11.nativeElement, childElements[3]);
                  this.drHandle11 = 'test1';
                  this.corn11 = 'test2';
                  this.stickerdiv11 = true;
                  this.storageService.removeItemForSticker();
                  this.showStickerToolBar = false;
                 }
                 break;
        case 10: childElements = this.elementRef10.nativeElement.children;
                 if (childElements[3]) {
                  this.renderer.removeChild(this.elementRef10.nativeElement, childElements[3]);
                  this.drHandle10 = 'test1';
                  this.corn10 = 'test2';
                  this.stickerdiv10 = true;
                  this.storageService.removeItemForSticker();
                  this.showStickerToolBar = false;
                 }
                 break;
        case 9: childElements = this.elementRef9.nativeElement.children;
                if (childElements[3]) {
                  this.renderer.removeChild(this.elementRef9.nativeElement, childElements[3]);
                  this.drHandle9 = 'test1';
                  this.corn9 = 'test2';
                  this.stickerdiv9 = true;
                  this.storageService.removeItemForSticker();
                  this.showStickerToolBar = false;
                }
                break;
      }
    });
  }

  incrementTextSize() {
    this.disabledBtn = false;
    this.textAreaSize += 1;
    this.storageService.getItemForTextArea().then(value => {
      switch (+value) {
        case 8: document.getElementById('textarea8').style.fontSize = this.textAreaSize + 'px';
                break;
        case 7: document.getElementById('textarea7').style.fontSize = this.textAreaSize + 'px';
                break;
        case 6: document.getElementById('textarea6').style.fontSize = this.textAreaSize + 'px';
                break;
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
          case 8: document.getElementById('textarea8').style.fontSize = this.textAreaSize + 'px';
                  break;
          case 7: document.getElementById('textarea7').style.fontSize = this.textAreaSize + 'px';
                  break;
          case 6: document.getElementById('textarea6').style.fontSize = this.textAreaSize + 'px';
                  break;
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
    else{
      this.disabledBtn = true;
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

  get resizeBoxElement2(): HTMLElement {
    return this.resizeBox2.nativeElement;
  }

  get dragHandleCornerElement2(): HTMLElement {
    return this.dragHandleCorner2.nativeElement;
  }

  get dragHandleRightElement2(): HTMLElement {
    return this.dragHandleRight2.nativeElement;
  }

  get dragHandleBottomElement2(): HTMLElement {
    return this.dragHandleBottom2.nativeElement;
  }

  get resizeBoxElement3(): HTMLElement {
    return this.resizeBox3.nativeElement;
  }

  get dragHandleCornerElement3(): HTMLElement {
    return this.dragHandleCorner3.nativeElement;
  }

  get dragHandleRightElement3(): HTMLElement {
    return this.dragHandleRight3.nativeElement;
  }

  get dragHandleBottomElement3(): HTMLElement {
    return this.dragHandleBottom3.nativeElement;
  }

  get resizeBoxElement4(): HTMLElement {
    return this.resizeBox4.nativeElement;
  }

  get dragHandleCornerElement4(): HTMLElement {
    return this.dragHandleCorner4.nativeElement;
  }

  get dragHandleRightElement4(): HTMLElement {
    return this.dragHandleRight4.nativeElement;
  }

  get dragHandleBottomElement4(): HTMLElement {
    return this.dragHandleBottom4.nativeElement;
  }

  get resizeBoxElement5(): HTMLElement {
    return this.resizeBox5.nativeElement;
  }

  get dragHandleCornerElement5(): HTMLElement {
    return this.dragHandleCorner5.nativeElement;
  }

  get dragHandleRightElement5(): HTMLElement {
    return this.dragHandleRight5.nativeElement;
  }

  get dragHandleBottomElement5(): HTMLElement {
    return this.dragHandleBottom5.nativeElement;
  }

  get resizeBoxElement6(): HTMLElement {
    return this.resizeBox6.nativeElement;
  }

  get dragHandleCornerElement6(): HTMLElement {
    return this.dragHandleCorner6.nativeElement;
  }

  get dragHandleRightElement6(): HTMLElement {
    return this.dragHandleRight6.nativeElement;
  }

  get dragHandleBottomElement6(): HTMLElement {
    return this.dragHandleBottom6.nativeElement;
  }

  get resizeBoxElement7(): HTMLElement {
    return this.resizeBox7.nativeElement;
  }

  get dragHandleCornerElement7(): HTMLElement {
    return this.dragHandleCorner7.nativeElement;
  }

  get dragHandleRightElement7(): HTMLElement {
    return this.dragHandleRight7.nativeElement;
  }

  get dragHandleBottomElement7(): HTMLElement {
    return this.dragHandleBottom7.nativeElement;
  }

  get resizeBoxElement9(): HTMLElement {
    return this.resizeBox9.nativeElement;
  }

  get dragHandleCornerElement9(): HTMLElement {
    return this.dragHandleCorner9.nativeElement;
  }

  get dragHandleRightElement9(): HTMLElement {
    return this.dragHandleRight9.nativeElement;
  }

  get dragHandleBottomElement9(): HTMLElement {
    return this.dragHandleBottom9.nativeElement;
  }

  get resizeBoxElement10(): HTMLElement {
    return this.resizeBox10.nativeElement;
  }

  get dragHandleCornerElement10(): HTMLElement {
    return this.dragHandleCorner10.nativeElement;
  }

  get dragHandleRightElement10(): HTMLElement {
    return this.dragHandleRight10.nativeElement;
  }

  get dragHandleBottomElement10(): HTMLElement {
    return this.dragHandleBottom10.nativeElement;
  }

  get resizeBoxElement11(): HTMLElement {
    return this.resizeBox11.nativeElement;
  }

  get dragHandleCornerElement11(): HTMLElement {
    return this.dragHandleCorner11.nativeElement;
  }

  get dragHandleRightElement11(): HTMLElement {
    return this.dragHandleRight11.nativeElement;
  }

  get dragHandleBottomElement11(): HTMLElement {
    return this.dragHandleBottom11.nativeElement;
  }

  get resizeBoxElement12(): HTMLElement {
    return this.resizeBox12.nativeElement;
  }

  get dragHandleCornerElement12(): HTMLElement {
    return this.dragHandleCorner12.nativeElement;
  }

  get dragHandleRightElement12(): HTMLElement {
    return this.dragHandleRight12.nativeElement;
  }

  get dragHandleBottomElement12(): HTMLElement {
    return this.dragHandleBottom12.nativeElement;
  }

  get resizeBoxElement13(): HTMLElement {
    return this.resizeBox13.nativeElement;
  }

  get dragHandleCornerElement13(): HTMLElement {
    return this.dragHandleCorner13.nativeElement;
  }

  get dragHandleRightElement13(): HTMLElement {
    return this.dragHandleRight13.nativeElement;
  }

  get dragHandleBottomElement13(): HTMLElement {
    return this.dragHandleBottom13.nativeElement;
  }

  get resizeBoxElement14(): HTMLElement {
    return this.resizeBox14.nativeElement;
  }

  get dragHandleCornerElement14(): HTMLElement {
    return this.dragHandleCorner14.nativeElement;
  }

  get dragHandleRightElement14(): HTMLElement {
    return this.dragHandleRight14.nativeElement;
  }

  get dragHandleBottomElement14(): HTMLElement {
    return this.dragHandleBottom14.nativeElement;
  }

  get resizeBoxElement15(): HTMLElement {
    return this.resizeBox15.nativeElement;
  }

  get dragHandleCornerElement15(): HTMLElement {
    return this.dragHandleCorner15.nativeElement;
  }

  get dragHandleRightElement15(): HTMLElement {
    return this.dragHandleRight15.nativeElement;
  }

  get dragHandleBottomElement15(): HTMLElement {
    return this.dragHandleBottom15.nativeElement;
  }

  get resizeBoxElement16(): HTMLElement {
    return this.resizeBox16.nativeElement;
  }

  get dragHandleCornerElement16(): HTMLElement {
    return this.dragHandleCorner16.nativeElement;
  }

  get dragHandleRightElement16(): HTMLElement {
    return this.dragHandleRight16.nativeElement;
  }

  get dragHandleBottomElement16(): HTMLElement {
    return this.dragHandleBottom16.nativeElement;
  }

  ngAfterViewInit() {
    this.setAllHandleTransform();
  }

  setAllHandleTransform() {
    let rect = this.resizeBoxElement.getBoundingClientRect();
    this.setHandleTransform(this.dragHandleCornerElement, rect, 'both');
    this.setHandleTransform(this.dragHandleRightElement, rect, 'x');
    this.setHandleTransform(this.dragHandleBottomElement, rect, 'y');

    rect = this.resizeBoxElement1.getBoundingClientRect();
    this.setHandleTransform(this.dragHandleCornerElement1, rect, 'both');
    this.setHandleTransform(this.dragHandleRightElement1, rect, 'x');
    this.setHandleTransform(this.dragHandleBottomElement1, rect, 'y');

    rect = this.resizeBoxElement2.getBoundingClientRect();
    this.setHandleTransform(this.dragHandleCornerElement2, rect, 'both');
    this.setHandleTransform(this.dragHandleRightElement2, rect, 'x');
    this.setHandleTransform(this.dragHandleBottomElement2, rect, 'y');

    rect = this.resizeBoxElement3.getBoundingClientRect();
    this.setHandleTransform(this.dragHandleCornerElement3, rect, 'both');
    this.setHandleTransform(this.dragHandleRightElement3, rect, 'x');
    this.setHandleTransform(this.dragHandleBottomElement3, rect, 'y');

    rect = this.resizeBoxElement4.getBoundingClientRect();
    this.setHandleTransform(this.dragHandleCornerElement4, rect, 'both');
    this.setHandleTransform(this.dragHandleRightElement4, rect, 'x');
    this.setHandleTransform(this.dragHandleBottomElement4, rect, 'y');

    rect = this.resizeBoxElement5.getBoundingClientRect();
    this.setHandleTransform(this.dragHandleCornerElement5, rect, 'both');
    this.setHandleTransform(this.dragHandleRightElement5, rect, 'x');
    this.setHandleTransform(this.dragHandleBottomElement5, rect, 'y');

    rect = this.resizeBoxElement6.getBoundingClientRect();
    this.setHandleTransform(this.dragHandleCornerElement6, rect, 'both');
    this.setHandleTransform(this.dragHandleRightElement6, rect, 'x');
    this.setHandleTransform(this.dragHandleBottomElement6, rect, 'y');

    rect = this.resizeBoxElement7.getBoundingClientRect();
    this.setHandleTransform(this.dragHandleCornerElement7, rect, 'both');
    this.setHandleTransform(this.dragHandleRightElement7, rect, 'x');
    this.setHandleTransform(this.dragHandleBottomElement7, rect, 'y');

    rect = this.resizeBoxElement9.getBoundingClientRect();
    this.setHandleTransform(this.dragHandleCornerElement9, rect, 'both');
    this.setHandleTransform(this.dragHandleRightElement9, rect, 'x');
    this.setHandleTransform(this.dragHandleBottomElement9, rect, 'y');

    rect = this.resizeBoxElement10.getBoundingClientRect();
    this.setHandleTransform(this.dragHandleCornerElement10, rect, 'both');
    this.setHandleTransform(this.dragHandleRightElement10, rect, 'x');
    this.setHandleTransform(this.dragHandleBottomElement10, rect, 'y');

    rect = this.resizeBoxElement11.getBoundingClientRect();
    this.setHandleTransform(this.dragHandleCornerElement11, rect, 'both');
    this.setHandleTransform(this.dragHandleRightElement11, rect, 'x');
    this.setHandleTransform(this.dragHandleBottomElement11, rect, 'y');

    rect = this.resizeBoxElement12.getBoundingClientRect();
    this.setHandleTransform(this.dragHandleCornerElement12, rect, 'both');
    this.setHandleTransform(this.dragHandleRightElement12, rect, 'x');
    this.setHandleTransform(this.dragHandleBottomElement12, rect, 'y');

    rect = this.resizeBoxElement13.getBoundingClientRect();
    this.setHandleTransform(this.dragHandleCornerElement13, rect, 'both');
    this.setHandleTransform(this.dragHandleRightElement13, rect, 'x');
    this.setHandleTransform(this.dragHandleBottomElement13, rect, 'y');

    rect = this.resizeBoxElement14.getBoundingClientRect();
    this.setHandleTransform(this.dragHandleCornerElement14, rect, 'both');
    this.setHandleTransform(this.dragHandleRightElement14, rect, 'x');
    this.setHandleTransform(this.dragHandleBottomElement14, rect, 'y');

    rect = this.resizeBoxElement15.getBoundingClientRect();
    this.setHandleTransform(this.dragHandleCornerElement15, rect, 'both');
    this.setHandleTransform(this.dragHandleRightElement15, rect, 'x');
    this.setHandleTransform(this.dragHandleBottomElement15, rect, 'y');

    rect = this.resizeBoxElement16.getBoundingClientRect();
    this.setHandleTransform(this.dragHandleCornerElement16, rect, 'both');
    this.setHandleTransform(this.dragHandleRightElement16, rect, 'x');
    this.setHandleTransform(this.dragHandleBottomElement16, rect, 'y');
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

  dragMove2(dragHandle: HTMLElement, $event: CdkDragMove<any>) {
    this.ngZone.runOutsideAngular(() => {
      this.resize(dragHandle, this.resizeBoxElement2);
    });
  }

  dragMove3(dragHandle: HTMLElement, $event: CdkDragMove<any>) {
    this.ngZone.runOutsideAngular(() => {
      this.resize(dragHandle, this.resizeBoxElement3);
    });
  }

  dragMove4(dragHandle: HTMLElement, $event: CdkDragMove<any>) {
    this.ngZone.runOutsideAngular(() => {
      this.resize(dragHandle, this.resizeBoxElement4);
    });
  }

  dragMove5(dragHandle: HTMLElement, $event: CdkDragMove<any>) {
    this.ngZone.runOutsideAngular(() => {
      this.resize(dragHandle, this.resizeBoxElement5);
    });
  }

  dragMove6(dragHandle: HTMLElement, $event: CdkDragMove<any>) {
    this.ngZone.runOutsideAngular(() => {
      this.resize(dragHandle, this.resizeBoxElement6);
    });
  }

  dragMove7(dragHandle: HTMLElement, $event: CdkDragMove<any>) {
    this.ngZone.runOutsideAngular(() => {
      this.resize(dragHandle, this.resizeBoxElement7);
    });
  }

  dragMove9(dragHandle: HTMLElement, $event: CdkDragMove<any>) {
    this.ngZone.runOutsideAngular(() => {
      this.resize(dragHandle, this.resizeBoxElement9);
    });
  }

  dragMove10(dragHandle: HTMLElement, $event: CdkDragMove<any>) {
    this.ngZone.runOutsideAngular(() => {
      this.resize(dragHandle, this.resizeBoxElement10);
    });
  }

  dragMove11(dragHandle: HTMLElement, $event: CdkDragMove<any>) {
    this.ngZone.runOutsideAngular(() => {
      this.resize(dragHandle, this.resizeBoxElement11);
    });
  }

  dragMove12(dragHandle: HTMLElement, $event: CdkDragMove<any>) {
    this.ngZone.runOutsideAngular(() => {
      this.resize(dragHandle, this.resizeBoxElement12);
    });
  }

  dragMove13(dragHandle: HTMLElement, $event: CdkDragMove<any>) {
    this.ngZone.runOutsideAngular(() => {
      this.resize(dragHandle, this.resizeBoxElement13);
    });
  }

  dragMove14(dragHandle: HTMLElement, $event: CdkDragMove<any>) {
    this.ngZone.runOutsideAngular(() => {
      this.resize(dragHandle, this.resizeBoxElement14);
    });
  }

  dragMove15(dragHandle: HTMLElement, $event: CdkDragMove<any>) {
    this.ngZone.runOutsideAngular(() => {
      this.resize(dragHandle, this.resizeBoxElement15);
    });
  }

  dragMove16(dragHandle: HTMLElement, $event: CdkDragMove<any>) {
    this.ngZone.runOutsideAngular(() => {
      this.resize(dragHandle, this.resizeBoxElement16);
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
      componentProps: { pickedImage: this.imageFile, cropArea:  4 / 3}
    }).then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    })
      .then(result => {
        if (result.role === 'confirm') {
          this.onAddImage(result);
        }
      });
  }

  onAddImage(result: any) {
    let val = 0;
    let count = 0;

    let childElements = this.elementRef7.nativeElement.children;
    if (childElements[3]) {
      count += 1;
    } else {
      val = 7;
    }

    childElements = this.elementRef6.nativeElement.children;
    if (childElements[3]) {
      count += 1;
    } else {
      val = 6;
    }

    childElements = this.elementRef5.nativeElement.children;
    if (childElements[3]) {
      count += 1;
    } else {
      val = 5;
    }

    childElements = this.elementRef4.nativeElement.children;
    if (childElements[3]) {
      count += 1;
    } else {
      val = 4;
    }

    childElements = this.elementRef3.nativeElement.children;
    if (childElements[3]) {
      count += 1;
    } else {
      val = 3;
    }

    childElements = this.elementRef2.nativeElement.children;
    if (childElements[3]) {
      count += 1;
    } else {
      val = 2;
    }

    childElements = this.elementRef1.nativeElement.children;
    if (childElements[3]) {
      count += 1;
    } else {
      val = 1;
    }

    childElements = this.elementRef.nativeElement.children;
    if (childElements[3]) {
      count += 1;
    } else {
      val = 0;
    }

    console.log('addimage', count, val);

    if (count < 8) {
      switch (val) {
        case 7: this.imagediv7 = false;
                // tslint:disable-next-line: max-line-length
                this.elementRef7.nativeElement.insertAdjacentHTML('beforeend', `<ion-img src=${result.data.croppedImage} id="image7"></ion-img>`);
                this.drHandle7 = 'dragHandle';
                this.corn7 = 'corner';
                break;
        case 6: this.imagediv6 = false;
                // tslint:disable-next-line: max-line-length
                this.elementRef6.nativeElement.insertAdjacentHTML('beforeend', `<ion-img src=${result.data.croppedImage} id="image6"></ion-img>`);
                this.drHandle6 = 'dragHandle';
                this.corn6 = 'corner';
                break;
        case 5: this.imagediv5 = false;
                // tslint:disable-next-line: max-line-length
                this.elementRef5.nativeElement.insertAdjacentHTML('beforeend', `<ion-img src=${result.data.croppedImage} id="image5"></ion-img>`);
                this.drHandle5 = 'dragHandle';
                this.corn5 = 'corner';
                break;
        case 4: this.imagediv4 = false;
                // tslint:disable-next-line: max-line-length
                this.elementRef4.nativeElement.insertAdjacentHTML('beforeend', `<ion-img src=${result.data.croppedImage} id="image4"></ion-img>`);
                this.drHandle4 = 'dragHandle';
                this.corn4 = 'corner';
                break;
        case 3: this.imagediv3 = false;
                // tslint:disable-next-line: max-line-length
                this.elementRef3.nativeElement.insertAdjacentHTML('beforeend', `<ion-img src=${result.data.croppedImage} id="image3"></ion-img>`);
                this.drHandle3 = 'dragHandle';
                this.corn3 = 'corner';
                break;
        case 2: this.imagediv2 = false;
                // tslint:disable-next-line: max-line-length
                this.elementRef2.nativeElement.insertAdjacentHTML('beforeend', `<ion-img src=${result.data.croppedImage} id="image2"></ion-img>`);
                this.drHandle2 = 'dragHandle';
                this.corn2 = 'corner';
                break;
        case 1: this.imagediv1 = false;
                // tslint:disable-next-line: max-line-length
                this.elementRef1.nativeElement.insertAdjacentHTML('beforeend', `<ion-img src=${result.data.croppedImage} id="image1"></ion-img>`);
                this.drHandle1 = 'dragHandle';
                this.corn1 = 'corner';
                break;
        case 0: this.imagediv = false;
                // tslint:disable-next-line: max-line-length
                this.elementRef.nativeElement.insertAdjacentHTML('beforeend', `<ion-img src=${result.data.croppedImage} id="image"></ion-img>`);
                this.drHandle = 'dragHandle';
                this.corn = 'corner';
                break;
      }
    } else {
      // Show alert over here maximum allocation reached
    }
  }

  selectSticker() {
    this.modalCtrl.create({
      component: StickerModalComponent,
      cssClass: 'translucent-modal'
    }).then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    }).then(result => {
      if (result.role === 'confirm') {
        this.onAddSticker(result);
      }
    });
  }

  onAddSticker(result: any) {
    let val = 0;
    let count = 0;

    let childElements = this.elementRef16.nativeElement.children;
    if (childElements[3]) {
      count += 1;
    } else {
      val = 16;
    }

    childElements = this.elementRef15.nativeElement.children;
    if (childElements[3]) {
      count += 1;
    } else {
      val = 15;
    }

    childElements = this.elementRef14.nativeElement.children;
    if (childElements[3]) {
      count += 1;
    } else {
      val = 14;
    }

    childElements = this.elementRef13.nativeElement.children;
    if (childElements[3]) {
      count += 1;
    } else {
      val = 13;
    }

    childElements = this.elementRef12.nativeElement.children;
    if (childElements[3]) {
      count += 1;
    } else {
      val = 12;
    }

    childElements = this.elementRef11.nativeElement.children;
    if (childElements[3]) {
      count += 1;
    } else {
      val = 11;
    }

    childElements = this.elementRef10.nativeElement.children;
    if (childElements[3]) {
      count += 1;
    } else {
      val = 10;
    }

    childElements = this.elementRef9.nativeElement.children;
    if (childElements[3]) {
      count += 1;
    } else {
      val = 9;
    }

    console.log('addsticker', count, val);

    if (count < 8) {
      switch (val) {
        case 16: this.stickerdiv16 = false;
                 // tslint:disable-next-line: max-line-length
                 this.elementRef16.nativeElement.insertAdjacentHTML('beforeend', `<ion-img src=${result.data.stickerUrl}></ion-img>`);
                 this.drHandle16 = 'dragHandle';
                 this.corn16 = 'corner';
                 break;
        case 15: this.stickerdiv15 = false;
                 // tslint:disable-next-line: max-line-length
                 this.elementRef15.nativeElement.insertAdjacentHTML('beforeend', `<ion-img src=${result.data.stickerUrl}></ion-img>`);
                 this.drHandle15 = 'dragHandle';
                 this.corn15 = 'corner';
                 break;
        case 14: this.stickerdiv14 = false;
                 // tslint:disable-next-line: max-line-length
                 this.elementRef14.nativeElement.insertAdjacentHTML('beforeend', `<ion-img src=${result.data.stickerUrl}></ion-img>`);
                 this.drHandle14 = 'dragHandle';
                 this.corn14 = 'corner';
                 break;
        case 13: this.stickerdiv13 = false;
                 // tslint:disable-next-line: max-line-length
                 this.elementRef13.nativeElement.insertAdjacentHTML('beforeend', `<ion-img src=${result.data.stickerUrl}></ion-img>`);
                 this.drHandle13 = 'dragHandle';
                 this.corn13 = 'corner';
                 break;
        case 12: this.stickerdiv12 = false;
                 // tslint:disable-next-line: max-line-length
                 this.elementRef12.nativeElement.insertAdjacentHTML('beforeend', `<ion-img src=${result.data.stickerUrl}></ion-img>`);
                 this.drHandle12 = 'dragHandle';
                 this.corn12 = 'corner';
                 break;
        case 11: this.stickerdiv11 = false;
                 // tslint:disable-next-line: max-line-length
                 this.elementRef11.nativeElement.insertAdjacentHTML('beforeend', `<ion-img src=${result.data.stickerUrl}></ion-img>`);
                 this.drHandle11 = 'dragHandle';
                 this.corn11 = 'corner';
                 break;
        case 10: this.stickerdiv10 = false;
                 // tslint:disable-next-line: max-line-length
                 this.elementRef10.nativeElement.insertAdjacentHTML('beforeend', `<ion-img src=${result.data.stickerUrl}></ion-img>`);
                 this.drHandle10 = 'dragHandle';
                 this.corn10 = 'corner';
                 break;
        case 9: this.stickerdiv9 = false;
                 // tslint:disable-next-line: max-line-length
                this.elementRef9.nativeElement.insertAdjacentHTML('beforeend', `<ion-img src=${result.data.stickerUrl}></ion-img>`);
                this.drHandle9 = 'dragHandle';
                this.corn9 = 'corner';
                break;
      }
    } else {
      // Show alert over here maximum allocation reached
    }
  }

  closeTextAreaSizeView() {
    this.storageService.removeItemForTextArea();
    this.showToolbar = true;
  }

  backToToolbar() {
    this.storageService.removeItemForImage();
    this.storageService.removeItemForSticker();
    this.showImageToolBar = false;
    this.showStickerToolBar = false;
    this.showToolbar = true;
  }

  checkmarkTextAreaSizeView() {
    this.showTextToolbar = false;
    this.storageService.getItemForTextArea().then(value => {
      switch (+value) {
        case 8: this.storageService.removeItemForTextArea();
                this.showToolbar = true;
                break;
        case 7: this.storageService.removeItemForTextArea();
                this.showToolbar = true;
                break;
        case 6: this.storageService.removeItemForTextArea();
                this.showToolbar = true;
                break;
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

