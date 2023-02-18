import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Route } from '@angular/router';
import { AnomalieService } from '../services/anomalie/anomalie.service';
import { ReleaseService } from '../services/release/release.service';
import { CasService } from '../services/test/cas/cas.service';
import { ScenarioService } from '../services/test/scenario/scenario.service';
import { TicketService } from '../services/ticket/ticket.service';
import { DialogEditComponent } from './dialog/dialog-edit/dialog-edit.component';

@Component({
  selector: 'app-perimetre',
  templateUrl: './perimetre.component.html',
  styleUrls: ['./perimetre.component.scss']
})
export class PerimetreComponent implements OnInit{

  displayedColumns: string[] = ['refRelease', 'dateLivraison', 'datePrevision','dateReelle', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  tickets!: [];

  constructor(private anomalieService: AnomalieService, private ticketService: TicketService, private releaseService: ReleaseService,
    private casTestService: CasService, public dialog: MatDialog, private scenarioService: ScenarioService){}

  ngOnInit(): void {
    this.getAllPerimetre();
  }


  ngAfterViewInit() {
    if(this.paginator === undefined){
      this.dataSource.paginator = this.paginator;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getAllPerimetre(){
    this.releaseService.getAllRelease()
    .subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error:(_err)=>{
        alert("Impossible de recupere la liste des releases!!!")
      }
    })
  }


  deleteRelease(refRelease: number){
    this.ticketService.getAllTicketForRelease(refRelease)
    .subscribe({
      next:(res) =>{
        if(res){
          res.array.forEach((element: number) =>  {
            this.ticketService.deleteTicket(element);
          });
          this.releaseService.deleteRelease(refRelease)
          .subscribe({
            next:(value) =>{
                this.getAllPerimetre();
            },
            error:()=>{
              alert("Impossible de supprimer les elements");
            }
          })
        }
      }
    })
  }

  editDialog(row : any) {
    this.dialog.open(DialogEditComponent, {
      width: '50%',
      data: row
    }).afterClosed().subscribe(()=>{
        this.getAllPerimetre();
      
    });
  }

  

  
}
