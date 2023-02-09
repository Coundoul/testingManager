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
    releaseNumRelease: ['', Validators.required],
    releaseDateLivraison: ['', Validators.required],
    releaseDatePrevision: ['', Validators.required],
    releaseDateReelle: ['', Validators.required]
  });
  constructor(@Inject(MAT_DIALOG_DATA) public editData : any, 
  private dialogRef : MatDialogRef<DialogComponent>, private releaseService: ReleaseService, private _formBuilder: FormBuilder){}

  ngOnInit(): void {

    this.FormGroup1.controls['releaseNumRelease'].setValue(this.editData.releaseNumRelease);
    this.FormGroup1.controls['releaseDateLivraison'].setValue(this.editData.releaseDateLivraison);
    this.FormGroup1.controls['releaseDatePrevision'].setValue(this.editData.releaseDatePrevision);
    this.FormGroup1.controls['releaseDateReelle'].setValue(this.editData.releaseDateReelle);
    
  }

  updateRelease(){
    this.releaseService.putRelease(this.FormGroup1.value, this.editData.id)
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
