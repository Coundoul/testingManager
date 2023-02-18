import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './layouts/sidenav/sidenav.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ProfilesComponent } from './layouts/profiles/profiles.component';
import { MainComponent } from './layouts/main/main.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import {ChartModule} from 'primeng/chart';
import {StepsModule} from 'primeng/steps';
import { ManagerComponent } from './entities/manager/manager.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { TesteurComponent } from './entities/testeur/testeur.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './entities/testeur/dialog/dialog.component';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { PerimetreComponent } from './entities/perimetre/perimetre.component';
import { DialogEditComponent } from './entities/perimetre/dialog/dialog-edit/dialog-edit.component';
import { DetailReleaseComponent } from './entities/perimetre/detail/detail-release/detail-release.component';
import { TicketDialogComponent } from './entities/perimetre/detail/dialogs/ticket/ticket-dialog/ticket-dialog.component';
import { CasTestDialogComponent } from './entities/perimetre/detail/dialogs/casTest/cas-test-dialog/cas-test-dialog.component';
import { ScenarioTestDialogComponent } from './entities/perimetre/detail/dialogs/scenarioTest/scenario-test-dialog/scenario-test-dialog.component';
import { AnomalieDialogComponent } from './entities/perimetre/detail/dialogs/anomalie/anomalie-dialog/anomalie-dialog.component';
import {MatTreeModule} from '@angular/material/tree';
import { DetailScenarioDialogComponent } from './entities/perimetre/detail/dialogs/scenarioTest/detail-sceario/detail-scenario-dialog/detail-scenario-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SidenavComponent,
    DashbordComponent,
    NavbarComponent,
    FooterComponent,
    ProfilesComponent,
    MainComponent,
    ManagerComponent,
    TesteurComponent,
    DialogComponent,
    PerimetreComponent,
    DialogEditComponent,
    DetailReleaseComponent,
    TicketDialogComponent,
    CasTestDialogComponent,
    ScenarioTestDialogComponent,
    AnomalieDialogComponent,
    DetailScenarioDialogComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // * Materiel Import
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatDividerModule,
    MatMenuModule,
    MatSidenavModule,
    ChartModule,
    StepsModule,
    CommonModule,
    FormsModule,
    StepsModule, 
    TabViewModule,
    ButtonModule, 
    CardModule, 
    InputTextModule, 
    DropdownModule, 
    InputMaskModule, 
    CheckboxModule, 
    ToastModule,
    MatStepperModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatDialogModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
