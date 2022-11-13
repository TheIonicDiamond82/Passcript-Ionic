import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {

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
  public perfil ="../assets/Imagenes/Avatares/logops.png";
  public img:string;
  constructor() { }

  ngOnInit() {
  }
  selection(url: string)
  {
    this.perfil= url;
    location.replace("perfil")
    console.log(this.perfil)
    this.img = url;
    
  }
}
