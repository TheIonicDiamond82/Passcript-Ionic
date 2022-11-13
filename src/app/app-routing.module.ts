import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Inicio',
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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
