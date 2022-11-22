import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AngularFireAuthGuard} from '@angular/fire/compat/auth-guard'
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login-data',
    pathMatch: 'full',
  },
  {
    path: 'Inicio',
    loadChildren: () => import('./Inicio/folder.module').then( m => m.FolderPageModule),
    canActivate:[AngularFireAuthGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./Perfil/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate:[AngularFireAuthGuard]
  },
  {
    path: 'password',
    loadChildren: () => import('./Password/password/password.module').then( m => m.PasswordPageModule),
    canActivate:[AngularFireAuthGuard]
  },
  {
    path: 'noticias',
    loadChildren: () => import('./Noticias/noticias/noticias.module').then( m => m.NoticiasPageModule),
    canActivate:[AngularFireAuthGuard]
  },
  {
    path: 'help',
    loadChildren: () => import('./Help/help/help.module').then( m => m.HelpPageModule),
    canActivate:[AngularFireAuthGuard]
  },
  {
    path: 'avatar',
    loadChildren: () => import('./Avatar/avatar/avatar.module').then( m => m.AvatarPageModule),
    canActivate:[AngularFireAuthGuard]
  },
  {
    path: 'password-add',
    loadChildren: () => import('./PasswordAdd/password-add/password-add.module').then( m => m.PasswordAddPageModule),
    canActivate:[AngularFireAuthGuard],
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login-data',
    loadChildren: () => import('./LoginData/login-data/login-data.module').then( m => m.LoginDataPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
