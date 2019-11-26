import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'select-page', loadChildren: './custom-page/select-page/select-page.module#SelectPagePageModule' },
  { path: 'edit-page', loadChildren: './custom-page/edit-page/edit-page.module#EditPagePageModule' },
  { path: 'select-template', loadChildren: './custom-template/select-template/select-template.module#SelectTemplatePageModule' },
  { path: 'edit-template', loadChildren: './custom-template/edit-template/edit-template.module#EditTemplatePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
