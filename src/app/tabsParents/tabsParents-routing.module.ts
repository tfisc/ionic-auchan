import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsParentsPage } from './tabsParents.page';

const routes: Routes = [
  {
    path: '',
    component: TabsParentsPage,
    children: [
      {
        path: 'recherche-cours',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../recherche-cours/recherche-cours.module').then(m => m.rechercheCoursPageModule)
          }
        ]
      },
      {
        path: 'liste-cours',
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
        redirectTo: '/parents/recherche-cours',
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
    path: 'creation-compte-enfant',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../creation-compte-enfant/creation-compte-enfant.module').then(m => m.CreationCompteEnfantModule)
      }
    ]
  },
  {
    path: 'profil-enfant',
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../profil-enfant/profil-enfant.module').then(m => m.ProfilEnfantModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/parents/recherche-cours',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsParentsPageRoutingModule {}
