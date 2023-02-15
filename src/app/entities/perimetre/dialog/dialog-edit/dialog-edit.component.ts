import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReleaseService } from 'src/app/entities/services/release/release.service';
import { DialogComponent } from 'src/app/entities/testeur/dialog/dialog.component';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.scss']
})
export class DialogEditComponent implements OnInit{
  
  FormGroup1 = this._formBuilder.group({
    dateLivraison: ['', Validators.required],
    datePrevision: ['', Validators.required],
    dateReelle: ['', Validators.required]
  });
  constructor(@Inject(MAT_DIALOG_DATA) public editData : any, 
  private dialogRef : MatDialogRef<DialogComponent>, private releaseService: ReleaseService, private _formBuilder: FormBuilder){}

  ngOnInit(): void {
    if(this.editData){
      this.FormGroup1.controls['dateLivraison'].setValue(this.editData.dateLivraison);
      this.FormGroup1.controls['datePrevision'].setValue(this.editData.datePrevision);
      this.FormGroup1.controls['dateReelle'].setValue(this.editData.dateReelle);
    }
  }

  updateRelease(){
    this.releaseService.putRelease(this.FormGroup1.value, this.editData.refRelease)
    .subscribe({
      next:(res)=>{
        alert("Release Modifier avec Succes");
        this.FormGroup1.reset();
        this.dialogRef.close('update');
      },
      error:()=>{
        alert("Impossible de modifier ce release");
      }
    })
  }

}
