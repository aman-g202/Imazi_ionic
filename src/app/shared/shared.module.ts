import { NgModule } from '@angular/core';
import { ImagePickerComponent } from './image-picker/image-picker.component';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ImageModalComponent } from './image-modal/image-modal.component';
import { AngularCropperjsModule } from 'angular-cropperjs';
import { StickerModalComponent } from './sticker-modal/sticker-modal.component';
import { StickerService } from './sticker-modal/sticker.service';

@NgModule({
    declarations: [
        ImagePickerComponent,
        ImageModalComponent,
        StickerModalComponent
    ],
    imports: [CommonModule, IonicModule, AngularCropperjsModule],
    exports: [ImagePickerComponent, ImageModalComponent, StickerModalComponent],
    entryComponents: [ImageModalComponent, StickerModalComponent],
    providers: [StickerService]
})

export class SharedModule {}