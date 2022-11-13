import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswordPage } from './password.page';
import { PasswordAddPage } from 'src/app/PasswordAdd/password-add/password-add.page';

const routes: Routes = [
  {
    path: '',
    component: PasswordPage
  },
  {
    path: 'password-add',
    component: PasswordAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordPageRoutingModule {}
