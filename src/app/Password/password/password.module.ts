import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordPageRoutingModule } from './password-routing.module';

import { PasswordPage } from './password.page';
import { PasswordAddPage } from 'src/app/PasswordAdd/password-add/password-add.page';
import { PasswordAddPageModule } from 'src/app/PasswordAdd/password-add/password-add.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordPageRoutingModule,
    PasswordAddPageModule
  ],
  declarations: [PasswordPage],
  providers:[PasswordAddPage]
})
export class PasswordPageModule {}
