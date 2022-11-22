import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AlertService } from 'src/app/Services/alert.service';
import { ImagenesService } from 'src/app/Services/imagenes.service';
import { Imagenes } from 'src/app/Interfaces/imagenes';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {
  image:String="";
  public perfilurl = [
    { url:'../assets/Imagenes/Avatares/Avatar1.png', },
    { url:'../assets/Imagenes/Avatares/Avatar2.jpg'},
    { url:'../assets/Imagenes/Avatares/Avatar3.png'},
    { url:'../assets/Imagenes/Avatares/Avatar4.png'},
    { url:'../assets/Imagenes/Avatares/Avatar5.jpg'},
    { url:'../assets/Imagenes/Avatares/Avatar7.png'},
    { url:'../assets/Imagenes/Avatares/Avatar8.JPG'},
    { url:'../assets/Imagenes/Avatares/logops.png'},
  ];

  //public img:string;
  constructor(private router: Router, private img: ImagenesService, private alert: AlertService, private navController: NavController) { }
  //public perfil = this.img.getImgUrl();
  perfil =this.declaration();

  ngOnInit() {

  }
  update(url:string)
  {
    //this.image.url=url;
    this.img.sendImgUrl(url).then(r=>{
      this.alert.successful("Avatar actualizado con exito");
      localStorage.setItem("ProfileImage",JSON.stringify(url));
      location.replace("perfil");

    }).catch(e=>{
      this.alert.error("Error: "+e.message);
    })
  }
  getImage()
  {
    this.img.getImgUrl().then(res=>{
      const docu= res.docs.map(res=>{
        const data=res.data() as Imagenes;
        
      })
    }).catch((e)=>{
      this.alert.error("Error: "+e.message);
    })
  }
declaration()
{
  if(this.image=="../assets/Imagenes/Avatares/Avatar1.png")
  {
    return this.perfilurl[0].url;
  }
  else if(this.image=="../assets/Imagenes/Avatares/Avatar2.png")
  {
    return this.perfilurl[1].url;
  }
  else if(this.image=="../assets/Imagenes/Avatares/Avatar3.png")
  {
    return this.perfilurl[2].url;
  }
  else if(this.image=="../assets/Imagenes/Avatares/Avatar4.png")
  {
    return this.perfilurl[3].url;
  }
  else if(this.image=="../assets/Imagenes/Avatares/Avatar5.png")
  {
    return this.perfilurl[4].url;
  }
  else if(this.image=="../assets/Imagenes/Avatares/Avatar7.png")
  {
    return this.perfilurl[5].url;
  }
  else if(this.image=="../assets/Imagenes/Avatares/Avatar8.png")
  {
    return this.perfilurl[6].url;
  }
  else if(this.image=="../assets/Imagenes/Avatares/logops.png")
  {
    return this.perfilurl[7].url;
  }
  else{
    return "../assets/Imagenes/Avatares/logops.png";
  }
}
  
  /*update(url:string) {
    this.image.url=url;
    this.img.sendImgUrl(this.image).then(r=>{
      this.alert.successful("Avatar actualizado con exito");
      this.back();
    }).catch(e=>{
      this.alert.error("Error: "+e.message);
    })

    
  }*/

  back() {
    this.navController.back();
  }

}
