import { Component, OnInit } from '@angular/core';
import { Upload } from '../interfaces/upload';
import { UploadService } from './../services/upload.service';
import * as _ from "lodash";

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.scss']
})
export class UploadFormComponent implements OnInit {
  selectedFiles: FileList;
  currentUpload: Upload;

  constructor(private uploadService: UploadService) { }

  ngOnInit() {
  }

  detectFiles(event){
    this.selectedFiles = event.target.files;
  }

  uploadSingle() {
    let file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    this.uploadService.pushUpload(this.currentUpload)
  }

  uploadMulti() {
    let files = this.selectedFiles
    let filesIndex = _.range(files.length)
    _.each(filesIndex, (idx) => {
      this.currentUpload = new Upload(files[idx]);
      this.uploadService.pushUpload(this.currentUpload)}
    )
  }

}
