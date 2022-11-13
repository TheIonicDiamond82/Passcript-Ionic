import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-add',
  templateUrl: './password-add.page.html',
  styleUrls: ['./password-add.page.scss'],
})
export class PasswordAddPage implements OnInit {

  otra = false;
  constructor() { }
  detalles = new FormGroup({
    aplicacion: new FormControl('', [Validators.required]),
    apiotra: new FormControl('', [Validators.required]),
    contraseña: new FormControl('', [Validators.required]), 
  });
  

  ngOnInit() {
  }
  otraF()
  {
    
    this.otra=true;
    return this.otra;
  }
  add()
  {

  }
  update()
  {

  }
  delete()
  {

  }
}
