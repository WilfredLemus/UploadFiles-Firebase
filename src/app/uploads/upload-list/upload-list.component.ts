import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { UploadService } from '../services/upload.service';
import { Upload } from './../interfaces/upload';

@Component({
  selector: 'app-upload-list',
  templateUrl: './upload-list.component.html',
  styleUrls: ['./upload-list.component.scss']
})
export class UploadListComponent implements OnInit {

  uploads: FirebaseListObservable<Upload[]>;
  showSpinner = true;

  constructor(private uploadService: UploadService) { }

  ngOnInit() {
    this.uploads = this.uploadService.getUploads({limitToLast: 5})
    this.uploads.subscribe(() => this.showSpinner = false)
  }

}
