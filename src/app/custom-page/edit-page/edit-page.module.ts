import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DragulaModule } from 'ng2-dragula';

import { IonicModule } from '@ionic/angular';

import { EditPagePage } from './edit-page.page';
import { Camera } from '@ionic-native/camera/ngx';

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
    DragulaModule
  ],
  declarations: [EditPagePage],
  providers: [Camera]
})
export class EditPagePageModule {}
