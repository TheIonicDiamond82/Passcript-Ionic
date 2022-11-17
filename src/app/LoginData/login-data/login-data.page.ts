import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
  constructor(private router: Router,private menuCtrl: MenuController) { }

  ngOnInit() {
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
