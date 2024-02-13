import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  file: any;
  imageSrc: any;
  properties: string;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  loadFile(event: Event)
  {
    this.file = (<HTMLInputElement>event.target).files[0];
    this.imageSrc = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.file));
    
    this.properties = this.file.type + "\n" + Math.round(this.file.size / 1024) + " KB" + "\n" + this.file.lastModifiedDate;
    }  
}
