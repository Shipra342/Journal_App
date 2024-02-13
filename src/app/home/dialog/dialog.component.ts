import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  createUpdateForm!: FormGroup;
  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {

  }

  ngOnInit(): void {

    this.createUpdateForm = new FormGroup({
      title: new FormControl(this.data ? this.data.title : ''),
      content: new FormControl(this.data ? this.data.content : ''),
      date: new FormControl(this.data ? this.data.date : ''),
    });
  }

  saveContent() {
    let title = this.createUpdateForm.value.title;
    let content = this.createUpdateForm.value.content;
    let date = this.createUpdateForm.value.date;
    let obj = { title: title, content: content, date: date };
    this.dialogRef.close(obj);
  }
  closeDialog() {
    this.dialogRef.close();
  }

}

