import { Component } from '@angular/core';
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
 public usuario = 'Eduardo Uriarte';
  constructor() {}
}
