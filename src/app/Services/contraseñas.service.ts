import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { Contraseñas } from '../Interfaces/contraseñas';

@Injectable({
  providedIn: 'root'
})
export class ContraseñasService {
  c =0;
  constructor(private col: AngularFirestore) { }
  crearContraseñas(contra:Contraseñas)
{
  this.c = this.c+1;
    return this.col.collection("Contraseñas").doc(contra.app).set(
  {

            App: contra.app,
            Img: contra.img,
            Password: contra.contraseña,
            Encrypted: contra.encryp

})


}
getPasswords()
{
  return this.col.collection("Contraseñas").snapshotChanges().pipe(map(res=>{
    return res.map(a=>{
      const data=a.payload.doc.data() as Contraseñas;
      return data;
    })
  }));
}
updatePassword(app,contra)
{
  return this.col.collection("Contraseñas").doc(app).update({
    App:app,
    Contraseña: contra
   }).then(r=>{
    return r;
  })
}
deletePassword(app)
{
  return this.col.collection("Contraseñas").doc(app).delete().then(r=>{
    return r;
  })
}
}