import { NgModule, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DragulaModule } from 'ng2-dragula';

import { IonicModule } from '@ionic/angular';

import { EditPagePage } from './edit-page.page';
import { Camera } from '@ionic-native/camera/ngx';
import { DragDropModule } from '@angular/cdk/drag-drop';
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
    DragulaModule,
    DragDropModule
  ],
  declarations: [EditPagePage],
  providers: [Camera]
})
export class EditPagePageModule{

}
