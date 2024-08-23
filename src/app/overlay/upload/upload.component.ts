import { Component } from '@angular/core';
import { MessageService, } from 'primeng/api';
import { FileUploadModule, FileUploadEvent } from 'primeng/fileupload';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';


@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [FileUploadModule, ToastModule, CommonModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css',
  providers: [MessageService]
})
export class UploadComponent {
     uploadedFiles: any[] = [];

    constructor(private messageService: MessageService) {}

    onUpload(event:FileUploadEvent) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }

        this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    }
}
