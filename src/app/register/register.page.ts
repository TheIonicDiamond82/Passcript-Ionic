import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MenuController, NavController } from '@ionic/angular';
import { Usuarios } from '../interfaces/usuarios';
import { AlertService } from '../Services/alert.service';
import { UsuariosService } from '../Services/usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  type: string;
  registerForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  constructor(private menuCtrl: MenuController, private user: UsuariosService, private alert: AlertService, private navCtrl: NavController) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }
   signUp()
   {
    /*this.user.crearUsuarioAuth(this.registerForm.value)
        this.alert.successful("Bienvenido a Passcript " + this.registerForm.value["name"]+" "+this.registerForm.value["lastname"]);
        location.replace("Inicio")*/
        this.user.crearUsuarioAuth(this.registerForm.value["email"],this.registerForm.value["password"]).then(auth=>{
          let user:Usuarios={
            id: auth.user.uid,
            nombre: this.registerForm.value['name'],
            apellido: this.registerForm.value["lastname"],
            correo: this.registerForm.value['email'],
            descripcion: "",
            contraseña: this.registerForm.value['password'],
            
          }
          this.user.crearUsuarioData(user).then(r=>{
            this.alert.successful("El usuario se ha registrado con exito.");
            this.back();
          }).catch(e=>{
            this.alert.error("Error: "+e.message);
          })
        })
   }
    
   back() {
    this.navCtrl.back();
  }
   changeType() {  // in your case function name is type
    if (this.type == 'password')
      this.type = 'text';
    else
      this.type = 'password';
  }
  back_login()
  {
    location.replace('/login-data')
  }
}
