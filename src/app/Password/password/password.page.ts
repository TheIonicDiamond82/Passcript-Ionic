import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
  pass=['pepitufochiquito1','pepitufochiquito2','pepitufochiquito3']
  passwords = [
    { img:'../assets/Imagenes/Facebook.png',app: 'Facebook', pass: this.pass[0]},
    { img:'../assets/Imagenes/instagram.png',app: 'Instagram', pass: this.pass[1]},
    { img:'../assets/Imagenes/snapchat.png',app: 'Snapchat', pass: this.pass[2]},
  ];
  

  
  
  constructor(private router: Router) { }

  ngOnInit() {
  }
  add(){
   
    this.router.navigateByUrl("password-add")
  }
  encrypt()
  {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789Ññ#$%&?¿+{}_-';
    const charactersLength = 12;
    for (let i = 0; i < charactersLength; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
    
    
    
  }
}
