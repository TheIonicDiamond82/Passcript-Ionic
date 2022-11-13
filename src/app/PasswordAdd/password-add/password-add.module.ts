import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PasswordAddPageRoutingModule } from './password-add-routing.module';

import { PasswordAddPage } from './password-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    PasswordAddPageRoutingModule
  ],
  declarations: [PasswordAddPage]
})
export class PasswordAddPageModule {}
