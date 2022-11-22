import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/Services/usuarios.service';
import { AlertService } from 'src/app/Services/alert.service';
import { PerfilPage } from 'src/app/Perfil/perfil/perfil.page';

@Component({
  selector: 'app-login-data',
  templateUrl: './login-data.page.html',
  styleUrls: ['./login-data.page.scss'],
})
export class LoginDataPage implements OnInit {

  type: string = "password";
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  loading = false;
  constructor(private router: Router,
    private menuCtrl: MenuController, 
    private user: UsuariosService,
    private alert: AlertService) { }

  ngOnInit() {

  }
  logIn()
  {
    this.user.signInWithEmailAndPassword(this.loginForm.value).then(res=>{
      /*this.user.getUser((res['user']['uid'])).subscribe(u=>{*/
      /*this.user.getUser((res['user']['uid'])).subscribe(u=>
        {*/
          
          localStorage.setItem("PasscriptUser",JSON.stringify(res['user']['uid']));
         
          this.user.getUser(res['user']['uid']).subscribe(u=>{
            this.alert.successful("Bienvenido a Passcript "+u['Nombre']);
            localStorage.setItem("FullName",JSON.stringify(u['Nombre']+" "+u['Apellido']));
            this.logged(true);
            location.replace("Inicio")
          });
    }).catch(e=>{
      this.alert.error("Error: "+e.message);
    })
  }

  logOut()
  {
    this.alert.warning("Saliendo de Passcript").then(res=>
      {
    this.user.logout();
    this.logged(false);
    location.replace('login-data');
      })}
  logged(userLog:boolean)
  {
    return userLog;
  }
  changeType() {  // in your case function name is type
    if (this.type == 'password')
      this.type = 'text';
    else
      this.type = 'password';
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }

   auth()
   {
     location.replace('/Inicio');
   }
   loginB()
   {
    
    this.router.navigateByUrl("login")
   }
}
