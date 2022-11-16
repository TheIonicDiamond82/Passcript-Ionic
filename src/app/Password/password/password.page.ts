import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
   passwords = [
    { img:'../assets/Imagenes/Facebook.png',app: 'Facebook', pass: 'pepitufochiquito2'},
    { img:'../assets/Imagenes/instagram.png',app: 'Instagram', pass: 'pepitufochiquito3'},
  ];
  passencrypts = [btoa('Hola')]

  
  
  constructor(private router: Router) { }

  ngOnInit() {
  }
  add(){
   
    this.router.navigateByUrl("password-add")
  }
}
