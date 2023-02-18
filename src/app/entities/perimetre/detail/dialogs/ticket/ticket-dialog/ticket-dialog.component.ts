import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IRelease, ITesteur } from 'src/app/entities/manager/manger.model';
import { ReleaseService } from 'src/app/entities/services/release/release.service';
import { TicketService } from 'src/app/entities/services/ticket/ticket.service';
import { TesteurService } from 'src/app/entities/testeur/service/testeur.service';

@Component({
  selector: 'app-ticket-dialog',
  templateUrl: './ticket-dialog.component.html',
  styleUrls: ['./ticket-dialog.component.scss']
})
export class TicketDialogComponent implements OnInit{

  FormGroup2 = this._formBuilder.group({
    titre: ['', Validators.required],
    type: ['', Validators.required],
    anomalies:[null, Validators.required],
    casDeTest:[null, Validators.required],
    release: new FormControl(null),
    testeur: new FormControl(null)
  });

  listTesteur!: ITesteur[] ;

  listRelease!: IRelease[] ;

  public constructor(private _formBuilder: FormBuilder, public testeurService : TesteurService, 
    public releaseService : ReleaseService, public ticketService : TicketService,public dialog: MatDialog, 
    private dialogRef : MatDialogRef<TicketDialogComponent>){}
  
  ngOnInit(): void {
    this.testeurService.getAllTesteur()
      .subscribe(response => {
        this.listTesteur = response;
      });

    this.releaseService.getAllRelease()
    .subscribe(response =>{
      this.listRelease = response;
    })
  }

  addTicket(){
    this.ticketService.postTicket(this.FormGroup2.value)
    .subscribe({
      next:(value)=> {
          alert("Ticket ajouter avec success!!!");
          this.dialogRef.close('save')
      },error:(err) =>{
          alert("Impossible d'envoyer les donner. Veuillez réassayer ultérieurement!!!")
      },
    })
  }

}
