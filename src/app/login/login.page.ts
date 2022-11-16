import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, public menuCtlr: MenuController) { }
  ionViewWillEnter() {
    this.menuCtlr.enable(false);
   }

  ngOnInit() {
  }
  auth()
{
  location.replace('/Inicio');
}}
