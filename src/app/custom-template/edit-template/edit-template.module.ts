import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditTemplatePage } from './edit-template.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { AngularCropperjsModule } from 'angular-cropperjs';

const routes: Routes = [
  {
    path: '',
    component: EditTemplatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule,
    AngularCropperjsModule
  ],
  declarations: [EditTemplatePage]
})
export class EditTemplatePageModule {}
