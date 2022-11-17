import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginDataPage } from './login-data.page';

const routes: Routes = [
  {
    path: '',
    component: LoginDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginDataPageRoutingModule {}
