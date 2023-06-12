import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './views/layout/base/base.component';
import { ClientsComponent } from './clients/clients.component';
import { AddclientComponent } from './addclient/addclient.component';
import { LivreurComponent } from './livreur/livreur.component';
import { CaisseSecondaireComponent } from './caisse-secondaire/caisse-secondaire.component';
import { CaissePrincipaleComponent } from './caisse-principale/caisse-principale.component';
import { UsersComponent } from './users/users.component';
import { AuthGuard } from './core/guard/auth.guard';
import { HasRoleGuard } from './core/Role/Role.guard';
import { ComponentAddFichedepaieComponent } from './component-add-fichedepaie/component-add-fichedepaie.component';
import { FichedePaieComponent } from './fichede-paie/fichede-paie.component';
const routes: Routes = [
  { path:'auth', loadChildren: () => import('./views/pages/auth/auth.module').then(m => m.AuthModule) },
  {
    path: '',
    component: BaseComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'Clients',
        component : ClientsComponent,
      },
      {
        path: 'AjoutClient',
        component :  AddclientComponent,
      },
      {
        path:'Livreur',
        component: LivreurComponent,
      },
      {
        path:'Caisse_Principale',
        component: CaisseSecondaireComponent,
      },
      {
        path:'Caisse',
        component: CaissePrincipaleComponent,
      },
      {
        path:'AjouterFicheDePaie',
        component: ComponentAddFichedepaieComponent,
      },
      {
        path:'FicheDePaie',
        component: FichedePaieComponent,
      },
      {
        path:'Personnels',
        component: UsersComponent,
      },
      {
        path: 'Menutium',
        loadChildren: () => import('./views/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      { path: '', redirectTo: 'Menutium', pathMatch: 'full' },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
