import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ITicket } from 'src/app/entities/manager/manger.model';
import { ReleaseService } from 'src/app/entities/services/release/release.service';
import { CasService } from 'src/app/entities/services/test/cas/cas.service';
import { TicketService } from 'src/app/entities/services/ticket/ticket.service';
import { TesteurService } from 'src/app/entities/testeur/service/testeur.service';
import { TicketDialogComponent } from '../../ticket/ticket-dialog/ticket-dialog.component';

@Component({
  selector: 'app-cas-test-dialog',
  templateUrl: './cas-test-dialog.component.html',
  styleUrls: ['./cas-test-dialog.component.scss']
})
export class CasTestDialogComponent implements OnInit{

  listTicket!: ITicket[] ;

  FormGroup6 = this._formBuilder.group({
    resultat: [null, Validators.required],
    scenario: [null, Validators.required],
    ticket: new FormControl(null)
  });


  FormGroup3 = this._formBuilder.group({
    titre: [null, Validators.required],
    type: [null, Validators.required],
    testeur: [],
    release: [],
    anomalies:[],
    casDeTest:[]
  });
  
  FormGroup2 = this._formBuilder.group({
    scenario: [null, Validators.required],
    casTest: []

  });

  FormGroup1 = this._formBuilder.group({
    resultat: [null, Validators.required]
  });
  
  public constructor(private _formBuilder: FormBuilder, public testeurService : TesteurService, 
    public releaseService : ReleaseService, public ticketService : TicketService, public casDeTest : CasService,public dialog: MatDialog, 
    private dialogRef : MatDialogRef<TicketDialogComponent>){}

  ngOnInit(): void {
    this.ticketService.getAllTicket()
    .subscribe(response =>{
      this.listTicket = response;
    })
  }

  addCasDeTest():void{
    if (this.FormGroup6.value.resultat!==null && this.FormGroup6.value.ticket!==null) {
      if (this.FormGroup6.value.scenario!==null) {
        
      } else {
        this.FormGroup1.value.resultat=this.FormGroup6.value.resultat;
        this.casDeTest.postCasTest(this.FormGroup1.value)
        .subscribe({
          next:(value1) =>{
            this.ticketService.getTicket(Number(this.FormGroup6.value.ticket))
            .subscribe({
             next:(value) =>{
                 this.FormGroup3.value.titre=value["titre"];
                 this.FormGroup3.value.type=value["type"];
                 this.FormGroup3.value.testeur=value["testeur"];
                 this.FormGroup3.value.release=value["release"];
                 this.FormGroup3.value.casDeTest=value1
                 this.FormGroup3.value.anomalies=value["anomalies"];
                 this.ticketService.putTicket(this.FormGroup3.value, value["refTicket"])
                 .subscribe({
                   next:(res)=>{
                     alert("Cas de Test ajouter avec Succes");
                     this.dialogRef.close();
                   },
                   error:()=>{
                     this.casDeTest.deleteCasTest(value1["refCasTest"])
                      .subscribe({
                        next:(value) =>{
                          alert("Impossible d'ajouter le Cas de Test");
                          this.dialogRef.close();
                        },
                      })
                   }
                 })
             },
            })
          },error:(err) =>{
              alert("Impossible d'envoyer les données. veuillez réassayer ultérieurment.")
          },
        })

      }
      
    }
  }
    
}
