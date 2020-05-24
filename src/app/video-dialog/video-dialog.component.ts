import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-video-dialog',
  templateUrl: './video-dialog.component.html',
  styleUrls: ['./video-dialog.component.css']
})
export class VideoDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<VideoDialogComponent>) { }

  closeDialog(): void {
      this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
