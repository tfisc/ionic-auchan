import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  {
    path: 'accueil',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
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
    path: 'jitsi',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'enfant',
    loadChildren: () => import('./enfant/enfant.module').then(m => m.EnfantModule)
  },
  {
    path: 'notation',
    loadChildren: () => import('./notation/notation.module').then(m => m.NotationModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'login-student',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'login-child',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'parents',
    loadChildren: () => import('./tabsParents/tabsParents.module').then(m => m.TabsParentsPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
