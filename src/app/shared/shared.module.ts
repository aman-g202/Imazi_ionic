import { NgModule } from '@angular/core';
import { ImagePickerComponent } from './image-picker/image-picker.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ImageModalComponent } from './image-modal/image-modal.component';
import { AngularCropperjsModule } from 'angular-cropperjs';
import { StickerModalComponent } from './sticker-modal/sticker-modal.component';
import { StickerService } from './sticker-modal/sticker.service';
import { Crop } from '@ionic-native/crop/ngx';
import { File } from '@ionic-native/file/ngx';
import { Base64 } from '@ionic-native/base64/ngx';

@NgModule({
    declarations: [
        ImagePickerComponent,
        ImageModalComponent,
        StickerModalComponent
    ],
    imports: [CommonModule, IonicModule, AngularCropperjsModule],
    exports: [ImagePickerComponent, ImageModalComponent, StickerModalComponent],
    entryComponents: [ImageModalComponent, StickerModalComponent],
    providers: [StickerService, Crop, File, Base64]
})

export class SharedModule {}