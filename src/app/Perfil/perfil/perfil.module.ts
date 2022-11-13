import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';
import { AvatarPage } from 'src/app/Avatar/avatar/avatar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    IonicModule,
    PerfilPageRoutingModule
  ],
  declarations:[PerfilPage,AvatarPage],
  providers:[AvatarPage]
})
export class PerfilPageModule {}
