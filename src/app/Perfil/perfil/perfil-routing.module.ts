import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilPage } from './perfil.page';
import { AvatarPage } from '../../Avatar/avatar/avatar.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilPage
  },
  {
    path: 'avatar',
    component: AvatarPage
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilPageRoutingModule {}
