import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginTabsPage } from './login-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: LoginTabsPage,
    children: [
      {
        path: 'parent',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./login-parent/login.module').then(m => m.LoginModule)
          }
        ]
      },
      {
        path: 'etudiant',
        children: [
          {
            path: '',
            loadChildren: () =>
                import('./login-etudiant/login.module').then(m => m.LoginModule)
          }
        ]
      },
      {
        path: 'enfant',
        children: [
          {
            path: '',
            loadChildren: () =>
                import('./login-enfant/login.module').then(m => m.LoginModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/login/parent',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login/parent',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
