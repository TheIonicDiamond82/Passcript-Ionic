import { Component, OnInit } from '@angular/core';

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

  
  
  constructor() { }

  ngOnInit() {
  }
  add(){
   
      location.replace("password-add")
  }
}
