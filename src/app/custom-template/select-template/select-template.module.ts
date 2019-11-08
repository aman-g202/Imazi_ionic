import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SelectTemplatePage } from './select-template.page';

const routes: Routes = [
  {
    path: '',
    component: SelectTemplatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SelectTemplatePage]
})
export class SelectTemplatePageModule {}
