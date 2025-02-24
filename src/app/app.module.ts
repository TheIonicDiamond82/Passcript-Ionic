import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { environment } from 'src/environments/environment';
import { initializeApp } from "firebase/app";
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreCollection, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginDataPage } from './LoginData/login-data/login-data.page';
import { LoginDataPageModule } from './LoginData/login-data/login-data.module';
import { PerfilPage } from './Perfil/perfil/perfil.page';
import { PerfilPageModule } from './Perfil/perfil/perfil.module';
import { FolderPageModule } from './Inicio/folder.module';
import { FolderPage } from './Inicio/folder.page';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    LoginDataPageModule,
    PerfilPageModule,
  

    
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, LoginDataPage,PerfilPage],
  bootstrap: [AppComponent],
})
export class AppModule {}
