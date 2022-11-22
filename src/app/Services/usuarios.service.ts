import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestoreModule,AngularFirestoreCollection,AngularFirestoreDocument, AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { getAuth, updateEmail,deleteUser } from "firebase/auth";
/*import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';
import { auth } from 'firebase';*/

import { Usuarios } from '../interfaces/usuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  authr=getAuth();
  userD = this.authr.currentUser;
  constructor( private fAuth: AngularFireAuth,private db: AngularFirestoreModule,private col: AngularFirestore) { }
  
   getUser(ids){
    return this.col.collection("Usuarios").doc(ids).get()
    .pipe(map(res=>{
      const data=res.data() as Usuarios;
      data.id=ids;
      return data;
    }));
  }

  getFullUserName()
  {
    /*let nombre = login.nombre;
    let apellido = login.apellido;
    return nombre +" "+ apellido;*/
  }
  updateUser(id, nombre, apellido,descripcion)
  {
    return this.col.collection("Usuarios").doc(id).update({
     
      Nombre:nombre,
      Apellido:apellido,
      Descripcion:descripcion
      
     }).then(r=>{
      return r;
    })
  }
  
  deleteUser(user)
  {
    return this.col.collection("Usuarios").doc(user).delete().then(r=>{
      return r;
    })
  }
  deleteUserAuth()
  {
    return deleteUser(this.userD).then(d => {
      return d;
    })
    //this.fAuth.getAuth()
   /*return this.col.collection("Usuarios").doc(user).delete().then(r=>{
      return r;
    })*/
  }
  signInWithEmailAndPassword(login) {
    return this.fAuth.signInWithEmailAndPassword(login.email, login.password).then(r => {
      return r;
    });
    
    /* signInWithEmailAndPassword(login) {
    return this.angularFireAuth.signInWithEmailAndPassword(login.email, login.password).then(r => {
      return r;
    });
  }*/ 
  }
crearUsuarioAuth(correo: string, contraseña: string)
{
  return this.fAuth.createUserWithEmailAndPassword(correo.toLowerCase(),contraseña);
    /* signInWithEmailAndPassword(login) {
    return this.fAuth.signInWithEmailAndPassword(login.email, login.password).then(r => {
      return r;
    });*/ 
}

crearUsuarioData(user:Usuarios)
{
 
    return this.col.collection("Usuarios").doc(user.id).set(
  {
            id: user.id,
            Nombre: user.nombre,
            Apellido: user.apellido,
            Descripcion: user.descripcion,
})
}
  logout()
  {
    return this.fAuth.signOut()
  }
  public passwordChange(email){
    return this.fAuth.sendPasswordResetEmail(email);
  }
}
