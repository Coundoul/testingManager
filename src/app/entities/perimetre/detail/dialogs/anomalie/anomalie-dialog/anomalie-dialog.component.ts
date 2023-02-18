import { Component } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ITesteur, IRelease, ITicket } from 'src/app/entities/manager/manger.model';
import { AnomalieService } from 'src/app/entities/services/anomalie/anomalie.service';
import { ReleaseService } from 'src/app/entities/services/release/release.service';
import { TicketService } from 'src/app/entities/services/ticket/ticket.service';
import { TesteurService } from 'src/app/entities/testeur/service/testeur.service';
import { TicketDialogComponent } from '../../ticket/ticket-dialog/ticket-dialog.component';

@Component({
  selector: 'app-anomalie-dialog',
  templateUrl: './anomalie-dialog.component.html',
  styleUrls: ['./anomalie-dialog.component.scss']
})
export class AnomalieDialogComponent {
  FormGroup5 = this._formBuilder.group({
    cloturee: [null, Validators.required],
    criticite: [null, Validators.required],
    enCours: [null, Validators.required],
    priorite: [null, Validators.required],
    statut: [null, Validators.required],
    ticket: [null, Validators.required],
  });
  
  FormGroup1 = this._formBuilder.group({
    cloturee: [null, Validators.required],
    criticite: [null, Validators.required],
    enCours: [null, Validators.required],
    priorite: [null, Validators.required],
    statut: [null, Validators.required],
  });

  FormGroup2 = this._formBuilder.group({
    titre: [null, Validators.required],
    type: [null, Validators.required],
    testeur: [],
    release: [],
    anomalies:[],
    casDeTest:[]
  });

  listTicket!: ITicket[] ;

  public constructor(private _formBuilder: FormBuilder, public testeurService : TesteurService, 
    public releaseService : ReleaseService, public ticketService : TicketService,public anomalieService: AnomalieService,public dialog: MatDialog, 
    private dialogRef : MatDialogRef<TicketDialogComponent>){}
  
  ngOnInit(): void {

    this.ticketService.getAllTicket()
    .subscribe(response =>{
      this.listTicket = response;
    })
  }

  addAnomalie(){
   this.FormGroup1.value.cloturee=this.FormGroup5.value.cloturee;
   this.FormGroup1.value.criticite=this.FormGroup5.value.criticite;
   this.FormGroup1.value.enCours=this.FormGroup5.value.enCours;
   this.FormGroup1.value.priorite=this.FormGroup5.value.priorite;
   this.FormGroup1.value.statut=this.FormGroup5.value.statut;
    if (this.FormGroup1.value.cloturee!==null || this.FormGroup1.value.criticite!==null || this.FormGroup1.value.enCours!==null
      || this.FormGroup1.value.priorite!==null || this.FormGroup1.value.statut!==null) {
        this.anomalieService.postAnomalie(this.FormGroup1.value)
        .subscribe({
          next:(value1)=> {
             this.ticketService.getTicket(Number(this.FormGroup5.value.ticket))
             .subscribe({
              next:(value) =>{
                  this.FormGroup2.value.titre=value["titre"];
                  this.FormGroup2.value.type=value["type"];
                  this.FormGroup2.value.testeur=value["testeur"];
                  this.FormGroup2.value.release=value["release"];
                  this.FormGroup2.value.casDeTest=value["casDeTest"];
                  this.FormGroup2.value.anomalies=value1;
                  this.ticketService.putTicket(this.FormGroup2.value, value["refTicket"])
                  .subscribe({
                    next:(res)=>{
                      alert("Anomalie ajouter avec Succes");
                      this.dialogRef.close();
                    },
                    error:()=>{
                      alert("Impossible d'ajouter le testeur");
                    }
                  })
              },
             })
          },error:(err) =>{
              alert("Impossible d'envoyer les donner. Veuillez réassayer ultérieurement!!!")
          },
        }) 
    }
  }

}
