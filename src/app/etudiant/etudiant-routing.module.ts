import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantComponent } from './etudiant.component';

const routes: Routes = [
  {
    path: 'tabs',
    component: EtudiantComponent,
    children: [
      {
        path: 'demande',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../demande-cours/demande-cours.module').then(m => m.DemandeCoursModule)
          }
        ]
      },
      {
        path: 'cours',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../liste-cours/liste-cours.module').then(m => m.listeCoursPageModule)
          }
        ]
      },
      {
        path: 'jitsi',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'archive',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../liste-cours/liste-cours.module').then(m => m.listeCoursPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/etudiant/tabs/demande',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'profil',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../profil/profil.module').then(m => m.ProfilModule)
      }
    ]
  },
  {
    path: 'matiere',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../matiere/matiere.module').then(m => m.MatiereModule)
      }
    ]
  },
  {
    path: 'horaire',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../plage-horaire/plage-horaire.module').then(m => m.PlageHoraireModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/etudiant/tabs/demande',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtudiantPageRoutingModule { }
