import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login-data',
    pathMatch: 'full'
  },
  {
    path: 'Inicio',
    loadChildren: () => import('./Inicio/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./Perfil/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./Password/password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./Noticias/noticias/noticias.module').then( m => m.NoticiasPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./Help/help/help.module').then( m => m.HelpPageModule)
  },
  {
    path: 'avatar',
    loadChildren: () => import('./Avatar/avatar/avatar.module').then( m => m.AvatarPageModule)
  },
  {
    path: 'password-add',
    loadChildren: () => import('./PasswordAdd/password-add/password-add.module').then( m => m.PasswordAddPageModule)
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
