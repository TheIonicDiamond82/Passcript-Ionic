import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';
import { AvatarPage } from 'src/app/Avatar/avatar/avatar.page';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    AngularFireAuthModule,
    IonicModule,
    PerfilPageRoutingModule
  ],
  declarations:[PerfilPage],
  providers:[AvatarPage]
})
export class PerfilPageModule {}
