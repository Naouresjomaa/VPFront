import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
  isModalOpen = true;
  constructor(public dialogRef: MatDialogRef<PopupComponent>,) { }

  ngOnInit(): void {
  }
  closePopup(){
    this.dialogRef.close();
  }
  closeModal() {
    this.isModalOpen = false;
  }
}
