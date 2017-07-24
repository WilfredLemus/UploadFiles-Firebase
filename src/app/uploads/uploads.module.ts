import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { UploadListComponent } from './upload-list/upload-list.component';
import { UploadDetailComponent } from './upload-detail/upload-detail.component';
import { UploadFormComponent } from './upload-form/upload-form.component';
import { UploadService } from './services/upload.service';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: UploadListComponent }
];

@NgModule({
  imports: [
    CommonModule,
    AngularFireDatabaseModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    UploadDetailComponent,
    UploadListComponent,
    UploadFormComponent
  ],
  providers: [
    UploadService
  ]
})
export class UploadsModule { }
