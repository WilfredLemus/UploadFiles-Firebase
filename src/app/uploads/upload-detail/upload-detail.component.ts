import { Component, OnInit, Input } from '@angular/core';
import { UploadService } from '../services/upload.service';
import { Upload } from '../interfaces/upload';

@Component({
  selector: 'app-upload-detail',
  templateUrl: './upload-detail.component.html',
  styleUrls: ['./upload-detail.component.scss']
})
export class UploadDetailComponent implements OnInit {
  @Input() upload: Upload;

  constructor(private uploadService: UploadService) { }

  ngOnInit() {
  }

  deleteUpload(upload) {
    this.uploadService.deleteUpload(this.upload)
  }

}
