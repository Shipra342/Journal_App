import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';



@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {


  @Input() textabc: any
  @Output() editEmiter = new EventEmitter<{ result: any, key: any }>();
  @Output() deleteEmiter = new EventEmitter<{ key: any }>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.textabc;   
  }

  openDialog():void {
    
    this.dialog.open(DialogComponent,{
      data: 
      {title: this.textabc.title, 
      content: this.textabc.content,
      date:this.textabc.date}

    }).afterClosed().subscribe(result => {
      if (result != undefined)
        this.editEmiter.emit({result:result, key:this.textabc.key})
      debugger
    });
  }

  deleteItem() {
    this.deleteEmiter.emit({key:this.textabc.key});
    debugger
    
  }

}
