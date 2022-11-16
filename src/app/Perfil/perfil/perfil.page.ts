import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../app.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AvatarPage } from '../../Avatar/avatar/avatar.page';
import { Router } from '@angular/router';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  
  constructor(public appComponent: AppComponent, public avatarM: AvatarPage, private router: Router) { }
  estado:boolean=true;
  nombre:string = this.appComponent.usuario;
  perfil:string = this.avatarM.perfil;
  avatar:string = this.perfil;
  descripcion: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quas ratione tempora perspiciatis\n" +
  "provident accusantium quod dolorem amet, ipsum expedita ea ipsa quis quibusdam deserunt eaque obcaecati quisquam veritatis!\n Fugiat.";
  nameForm = new FormGroup({
    name: new FormControl('', [Validators.required]), 
  });
  descForm = new FormGroup({
    name: new FormControl('', [Validators.required]), 
  });
  ngOnInit() {
  }
 edit()
  {
    if(this.estado==true)
    {
      this.estado=false;
    }
    else{
      this.estado=false;

    }
    
  }
  update(){
    //this.nombre = this.nameForm.value['name'];
    //this.descripcion = this.descForm.value['description'];
    this.estado=true;
    
  }
  uptimg()
  {
    let aviso = "¿Deseas actualizar tu avatar de perfil?";
    if(confirm(aviso)==true)
    {
      this.router.navigateByUrl("avatar")
    }
    else{
      
    }
    
  }
 

}
