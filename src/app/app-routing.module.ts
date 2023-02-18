import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { ManagerComponent } from './entities/manager/manager.component';
import { TesteurComponent } from './entities/testeur/testeur.component';
import { PerimetreComponent } from './entities/perimetre/perimetre.component';
import { DetailReleaseComponent } from './entities/perimetre/detail/detail-release/detail-release.component';
import { ScenarioTestDialogComponent } from './entities/perimetre/detail/dialogs/scenarioTest/scenario-test-dialog/scenario-test-dialog.component';

const routes: Routes = [
  {
    path:'', 
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home', 
    component:HomeComponent
  },
  {
    path:'dashboard', 
    component:DashbordComponent
  },
  {
    path:'perimetre', 
    component:PerimetreComponent
  },
  {
    path:'managerTesting', 
    component:ManagerComponent
  },
  {
    path:'testeur', 
    component:TesteurComponent
  },
  {
    path:':id/view', 
    component:DetailReleaseComponent
  },
  {
    path:':id/:resultat/detailCasTest',
    component: ScenarioTestDialogComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
