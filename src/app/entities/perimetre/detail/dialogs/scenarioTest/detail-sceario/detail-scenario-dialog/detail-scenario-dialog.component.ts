import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CasService } from 'src/app/entities/services/test/cas/cas.service';
import { ScenarioService } from 'src/app/entities/services/test/scenario/scenario.service';

@Component({
  selector: 'app-detail-scenario-dialog',
  templateUrl: './detail-scenario-dialog.component.html',
  styleUrls: ['./detail-scenario-dialog.component.scss']
})
export class DetailScenarioDialogComponent implements OnInit{

  scenarioForm!: FormGroup;
  actionBtn : string = "Envoyer";
  listCasTest: any;

  constructor(private formBuilder : FormBuilder, 
    private scenarioService : ScenarioService,
    @Inject(MAT_DIALOG_DATA) public editData : any, 
    private dialogRef : MatDialogRef<DetailScenarioDialogComponent>, private casTestService : CasService){}

  ngOnInit(): void {
    this.casTestService.getAllCasTest()
    .subscribe({
      next:(value) =>{
          this.listCasTest=value;
      },
    })
    this.scenarioForm = this.formBuilder.group({
      scenario: [null, Validators.required],
      casDeTest: new FormControl(null)
    });
    if(this.editData){
      this.actionBtn="Modifier";
      this.scenarioForm.controls['scenario'].setValue(this.editData.scenario);
      this.scenarioForm.controls['casDeTest'].setValue(this.editData.casDeTest);
    }
  }

  addScenario(){
    if(!this.editData){
      if(this.scenarioForm.valid){
        this.scenarioService.postScenario(this.scenarioForm.value)
        .subscribe({
          next:(res)=>{
            alert("Scénario ajouter avec succès");
            this.scenarioForm.reset();
            this.dialogRef.close('save');
          },
          error:()=>{
            alert("Impossible d'ajouter un nouveau Scénario")
          }
        })
      }
    }else{
      this.updateScénario();
    }
  }

  updateScénario(){
    this.scenarioService.putScenario(this.scenarioForm.value, this.editData.refScenario)
    .subscribe({
      next:(res)=>{
        alert("Scénario Modifier avec Succes");
        this.scenarioForm.reset();
        this.dialogRef.close('update');
      },
      error:()=>{
        alert("Impossible de modifier ce scénario");
      }
    })
  }
}
