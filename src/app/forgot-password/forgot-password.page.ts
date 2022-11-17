import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AlertService } from '../Services/alert.service';
import { UsuariosService } from '../Services/usuarios.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  recoverPass = new FormGroup({
    correo: new FormControl(''),
  });
  constructor(private menuCtrl: MenuController, private userService: UsuariosService, private alertService: AlertService, private router: Router) { }

 
  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }
   recuperacion()
   {
      //let mail = this.recoverPass.value['correo'];
      let mail = "evelincristal1919@gmail.com"
      console.log(mail);
      this.userService.passwordChange(mail).then(r=>{
        this.alertService.successful("Se le ha mandado un correo para que el usuario cambie su contraseña");
        this.router.navigateByUrl('/login-data');
        console.log('Send e-mail');
      }).catch(e=>{
        this.alertService.error("Error: "+e.message);
      })
   }
}
