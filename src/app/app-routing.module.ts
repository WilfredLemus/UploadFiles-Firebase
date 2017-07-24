import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadListComponent } from './uploads/upload-list/upload-list.component';


const routes: Routes = [
  { path: '', component: UploadListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }