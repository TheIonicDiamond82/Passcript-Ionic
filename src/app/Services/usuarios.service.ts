import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestoreModule,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/compat/firestore';
/*import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';
import { auth } from 'firebase';*/

import { Usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private fAuth: AngularFireAuth,private db: AngularFirestoreModule,) { }
  create()
  {

  }
  read()
  {

  }
  update()
  {

  }
  delete()
  {

  }
  public passwordChange(email){
    return this.fAuth.sendPasswordResetEmail(email);
  }
}
