import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../../app.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AvatarPage } from '../../Avatar/avatar/avatar.page';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/Services/usuarios.service';
import { AlertService } from 'src/app/Services/alert.service';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { LoginDataPage } from 'src/app/LoginData/login-data/login-data.page';
import { getAuth, updateEmail,deleteUser } from "firebase/auth";
import { stringify } from 'querystring';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  
  constructor( 
    public avatarM: AvatarPage, 
    private router: Router, 
    private user:UsuariosService,
    private alert: AlertService,
    private navController: NavController,
    private login: LoginDataPage) { }

  estado:boolean=true;
  //nombre:string = this.user.getFullUserName();
  avatar:any;
  name:any;
  last:any;
  desc:any;
  usuario:any;
  uid:any;
  type: string = "password";
  nameForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]), 
    
  });
  
  ngOnInit() {

    this.avatar=JSON.parse(localStorage.getItem("ProfileImage"));
    this.uid=JSON.parse(localStorage.getItem("PasscriptUser"));
    this.getUserName();
    this.getUserLast();
    this.getUserDesc();

    /**if (this.user) {
      this.nameForm.setValue({
        nombre: this.user['nombre'],
        apellido: this.user['apellido'],
        descripcion: this.user['descripcion'],
      });
    }*/
    
  }
  changeType() {  // in your case function name is type
    if (this.type == 'password')
      this.type = 'text';
    else
      this.type = 'password';
  }
 editU()
  {
    if(this.estado==true)
    {
      this.estado=false;
    }
    else{
      this.estado=false;

    }
    console.log(this.estado)
    
  }
  getProfile()
    {
      console.log(this.avatarM.getImage())
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
  delete()
  {
    if (confirm("¿Estas seguro que deseas eliminar tu cuenta de usuario?")) {
      
          this.user.deleteUserAuth().then(d=>{
          }).catch(e=>{
            this.alert.error("Error: "+e.message);
          })
          this.user.deleteUser(this.uid).then(r=>{
            this.alert.successful("El usuario fue eliminado con exito");
            this.login.logged(false);
            this.router.navigateByUrl("login-data");
      
          }).catch(e=>{
            this.alert.error("Error: "+e.message);
          })
        
        
    }
  }
  update(){
   
    //console.log(this.auth['user']['uid']);
   
    //this.nombre = this.nameForm.value['name'];
    //this.descripcion = this.descForm.value['description'];
    this.estado=true;
    this.user.updateUser(
      this.uid,
      this.nameForm.value['nombre'],
      this.nameForm.value['apellido'],
      this.nameForm.value['descripcion']
      ).then(r=>{
      this.alert.successful("El usuario se ha actualizado con exito");
      this.router.navigateByUrl("perfil")
    }).catch(e=>{
      this.alert.error("Error: "+e.message);
    })
    
    
  }
  back() {
    this.navController.back();
  }
  getUserName()
  {
    return this.user.getUser(
      this.uid
      ).toPromise().then(g=>{
        this.name= g['Nombre']
      })
      
  }
  getUserLast()
  {
    return this.user.getUser(
      this.uid
      ).toPromise().then(g=>{
        this.last= g['Apellido']
      })
  }
  getUserDesc()
  {
    return this.user.getUser(
      this.uid
      ).toPromise().then(g=>{
        this.desc= g['Descripcion']
      })
  }
  getUserFullName()
  {
    this.user.getUser(
      this.uid
      ).toPromise().then(g=>{
        localStorage.setItem("FullName",JSON.stringify(g['Nombre']+" "+g['Apellido']))
      })
  }
 

}
