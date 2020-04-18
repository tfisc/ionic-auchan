import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  {
    path: 'accueil',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)
  },
  {
    path: 'etudiant',
    loadChildren: () => import('./etudiant/etudiant.module').then(m => m.EtudiantModule)
  },
  {
    path: 'enfant',
    children: [
      {
        path: '',
        loadChildren: () => import('./enfant/enfant.module').then(m => m.EnfantModule)
      },
      {
        path: 'jitsi',
        loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
      },
    ]
  },
  {
    path: 'login',
    children: [{
      path: 'parent',
      loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    },
    {
      path: 'student',
      loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    },
    {
      path: 'child',
      loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
    },

    ]
  },
  {
    path: 'parents',
    loadChildren: () => import('./tabsParents/tabsParents.module').then(m => m.TabsParentsPageModule)
  },
  { path: '**', redirectTo: '/accueil', pathMatch: 'full' },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
