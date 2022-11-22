import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContraseñasService } from 'src/app/Services/contraseñas.service';
import { Contraseñas } from 'src/app/Interfaces/contraseñas';
import { AlertService } from 'src/app/Services/alert.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-password-add',
  templateUrl: './password-add.page.html',
  styleUrls: ['./password-add.page.scss'],
})
export class PasswordAddPage implements OnInit {

  otra=true;
  nuevo:any;
  
  constructor(private contraServ: ContraseñasService, private alert: AlertService,public navController: NavController) { }
  detalles = new FormGroup({
    aplicacion: new FormControl('', [Validators.required]),
    apiotra: new FormControl('', [Validators.required]),
    contraseña: new FormControl('', [Validators.required]), 
  });
  
  seleccion(value)
  {
    if(value == "otra")
    {
      this.otra=false;
    }
    else{
      this.otra=true;
    }
  }
  
  ngOnInit() {
    this.nuevo=JSON.parse(localStorage.getItem("Estado"))
  }
  crearContra()
  {
      if(this.detalles.value.aplicacion=="otra")
      {
        let psw: Contraseñas=
        {
        app:this.detalles.value["apiotra"],
        img:"../assets/Imagenes/logopasscript.png",
        contraseña:this.detalles.value["contraseña"],
        encryp: btoa(this.detalles.value["contraseña"])
        }
        this.contraServ.crearContraseñas(psw).then(r=>{
          this.alert.successful("La contraseña se ha guardado con exito.");
          this.back();
        }).catch(e=>{
          this.alert.error("Error: "+e.message);
        })
      }
      else{
        let path;
        if(this.detalles.value["aplicacion"]=="facebook")
        {
          path="../assets/Imagenes/Facebook.png"
        }
        else if(this.detalles.value["aplicacion"]=="instagram")
        {
          path="../assets/Imagenes/instagram.png"
        }
        else if(this.detalles.value["aplicacion"]=="snapchat")
        {
          path="../assets/Imagenes/snapchat.png"
        }
        else if(this.detalles.value["aplicacion"]=="tiktok")
        {
          path="../assets/Imagenes/tiktok.png"
        }
        else if(this.detalles.value["aplicacion"]=="twitter")
        {
          path="../assets/Imagenes/twitter.png"
        }
        else if(this.detalles.value["aplicacion"]=="youtube")
        {
          path="../assets/Imagenes/youtube.png"
        }
        let psw: Contraseñas=
      {
      
      app:this.detalles.value["aplicacion"],
      contraseña:this.detalles.value["contraseña"],
      img:path,
      encryp: btoa(this.detalles.value["contraseña"])
      }
    
      this.contraServ.crearContraseñas(psw).then(r=>{
        this.alert.successful("La contraseña se ha guardado con exito.");
        this.back();
      }).catch(e=>{
        this.alert.error("Error: "+e.message);
      })
      }
      /*let psw: Contraseñas=
      {
      app:this.detalles.value["apiotra"],
      contraseña:this.detalles.value["contraseña"]
      }
      this.contraServ.crearContraseñas(psw).then(r=>{
        this.alert.successful("La contraseña se ha guardado con exito.");
        this.back();
      }).catch(e=>{
        this.alert.error("Error: "+e.message);
      })*/
    }
  
  
  otroState()
  {
    
    return this.otra;

  }
 
  back() {
    this.navController.back();
  }
   
    
  update()
  {
    if(this.detalles.value.aplicacion=="otra")
      {
        this.contraServ.updatePassword(this.detalles.value["apiotra"],this.detalles.value["contraseña"]).then(r=>{
          this.alert.successful("La contraseña fue actualizada con exito");
          this.back();
    
        }).catch(e=>{
          this.alert.error("Error: "+e.message);
        })
      }
      else
      {
        this.contraServ.updatePassword(this.detalles.value["aplicacion"],this.detalles.value["contraseña"]).then(r=>{
          this.alert.successful("La contraseña fue actualizada con exito");
          this.back();
    
        }).catch(e=>{
          this.alert.error("Error: "+e.message);
      })
    }
      }
      //Metodo para borrar las contraseñas
  delete()
  {
    if (confirm("¿Estas seguro que deseas eliminar la contraseña?")) {
    if(this.detalles.value.aplicacion=="otra")
      {
        this.contraServ.deletePassword(this.detalles.value["apiotra"]).then(r=>{
          this.alert.successful("La contraseña se elimino con exito");
          this.back();
    
        }).catch(e=>{
          this.alert.error("Error: "+e.message);
        })
      
      }
      else
      {
        this.contraServ.deletePassword(this.detalles.value["aplicacion"]).then(r=>{
          this.alert.successful("La contraseña se elimino con exito");
          this.back();
    
        }).catch(e=>{
          this.alert.error("Error: "+e.message);
      })
      }
  }
}
}
