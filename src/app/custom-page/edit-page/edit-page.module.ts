import { NgModule, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditPagePage } from './edit-page.page';
import { Camera } from '@ionic-native/camera/ngx';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularCropperjsModule } from 'angular-cropperjs';
import { Base64 } from '@ionic-native/base64/ngx';


const routes: Routes = [
  {
    path: '',
    component: EditPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    DragDropModule,
    SharedModule,
    AngularCropperjsModule
  ],
  declarations: [EditPagePage],
  providers: [Camera, Base64]
  // providers: [Base64]
})
export class EditPagePageModule{

}
