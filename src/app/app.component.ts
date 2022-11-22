import { Component } from '@angular/core';
import { FolderPage } from './Inicio/folder.page';
import { LoginDataPage } from './LoginData/login-data/login-data.page';
import { PerfilPage } from './Perfil/perfil/perfil.page';
import { AlertService } from './Services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Perfil', url: 'perfil', icon: 'person-circle' },
    { title: 'Contraseñas', url: 'password', icon: 'lock-closed' },
    { title: 'Noticias', url: 'noticias', icon: 'desktop' },
    { title: 'Ayuda', url: 'help', icon: 'information-circle' },
  
  ];
  constructor(private login:LoginDataPage, private perfil:PerfilPage,private alert: AlertService) {}
  public usuario = JSON.parse(localStorage.getItem("FullName"));
  logout()
  {
    this.login.logOut();

    
  }
}
