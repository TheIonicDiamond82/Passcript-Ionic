import { Component, OnInit } from '@angular/core';
import { PasswordAddPage } from 'src/app/PasswordAdd/password-add/password-add.page';
import { Router } from '@angular/router';
import { Console } from 'console';
import { ContraseñasService } from 'src/app/Services/contraseñas.service';
import { Contraseñas } from 'src/app/Interfaces/contraseñas';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
  passEncrypted=[""] ;
  c=-1;
  passwords: Contraseñas[];
  pass=['carlos','miguel','12345'];
  /*passwords = [
    { img:'../assets/Imagenes/Facebook.png',app: 'Facebook', pass: this.pass[0]},
    { img:'../assets/Imagenes/instagram.png',app: 'Instagram', pass: this.pass[1]},
    { img:'../assets/Imagenes/snapchat.png',app: 'Snapchat', pass: this.pass[2]},
  ];*/
  

  
  
  constructor(private router: Router,private passadd: PasswordAddPage,private contraServ: ContraseñasService) { }

  ngOnInit() {
    this.getAllPasswords();
  }
  add(){
    localStorage.setItem("Estado",JSON.stringify(true));
    this.router.navigateByUrl('/password-add')
   
    
  }
 

  /*encrypt()
  {
    this.c=this.c+1;
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789Ññ#$%&?¿+{}_-';
    const charactersLength = 12;
    for (let i = 0; i < charactersLength; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    this.passEncrypted.push(result);
    console.log(this.passEncrypted[this.c])
    return this.passEncrypted[this.c];
    
  
  
    
  }*/
  getAllPasswords()
    {
      this.contraServ.getPasswords().subscribe(r => {
        this.passwords = r;
      });
      
    }
    editP()
    {
      localStorage.setItem("Estado",JSON.stringify(false));
      this.router.navigateByUrl('/password-add');
      
    }
}
