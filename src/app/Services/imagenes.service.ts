import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { map } from "rxjs/operators";
import { Imagenes } from 'src/app/Interfaces/imagenes';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {
//private db: AngularFirestoreCollection
  constructor(private router: Router,private db:AngularFirestore) { }

    
    /*return this.db.doc(urlr).get().pipe(map(res=>
      {
        const img = res.data() as Imagenes;
        img.url = urlr;
        return img;
      }))*/
    
    /*return this.db.collection("Users").doc(id).get()
    .pipe(map(res=>{
      const data=res.data() as User;
      data.id=id;
      return data;
    }));*/
  
  /*public getImgUrl(){
    return this.db.collection("Imagen_Perfil").doc("ImagenPerfil").get()
    .pipe(map(res=>{
      const data=res.data() as Imagenes;
      return data.url;
    }));
  }*/
  getImgUrl()
  {
    const getImg = this.db.collection("Imagen_Perfil").get().toPromise();
    return getImg;
  }
  sendImgUrl(imgURL)
  {
    return this.db.collection("Imagen_Perfil").doc("ImagenPerfil").update({
      url:imgURL,
     }).then(r=>{
      return r;
    })
  }

}
