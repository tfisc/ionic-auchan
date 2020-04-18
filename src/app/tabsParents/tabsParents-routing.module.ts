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
          },
          {
            path: 'resultat',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
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
    path: '',
    redirectTo: '/parents/recherche-cours',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsParentsPageRoutingModule { }
