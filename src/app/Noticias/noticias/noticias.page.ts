import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {
  public noticias = [
    { 
      titulo: 'Un desarrollador filtra el generador de ransomware de LockBit a la Red',
      descripcion:'Este usuario afirmó que su equipo pirateó los servidores LockBit, descubrió el generador de ransomware LockBit Black (3.0) y adjuntó un enlace al repositorio de GitHub', 
      url: 'https://revistabyte.es/actualidad-it/generador-de-ransomware-lockbit/', 
      img: '../assets/Imagenes/noti1.jpg'
    },
    { 
      titulo: 'Así fue, paso a paso, el ciberataque a Uber',
      descripcion:'Gran parte del análisis del ciberataque a Uber se ha centrado en la ingeniería socia', 
      url: 'https://revistabyte.es/ciberseguridad/paso-a-paso-el-ciberataque-a-uber/', 
      img: '../assets/Imagenes/noti2.jpg'
    },
    { 
      titulo: 'Todo lo que sabemos sobre el hackeo a la SICT del gobierno de México',
      descripcion:'La Secretaría de Infraestructura, Comunicaciones y Transportes (SICT) es una más de las dependencias del gobierno de Andrés Manuel López Obrador que han sido víctimas de un ciberataque. La oficina a cargo de Jorge Arganis Díaz Leal es una manzana deseada por los cibercriminales.', 
      url: 'https://www.eleconomista.com.mx/tecnologia/Todo-lo-que-sabemos-sobre-el-hackeo-a-la-SICT-del-gobierno-de-Mexico-20221102-0059.html', 
      img: '../assets/Imagenes/noti3.png'
    },
    { 
      titulo: 'Descubren 200 paquetes maliciosos vinculados al grupo LofyGang',
      descripcion:'La empresa de seguridad informática Checkmarx descubrió 200 paquetes maliciosos con miles de instalaciones vinculadas a un grupo de ataque llamado "LofyGang".', 
      url: 'https://www.eleconomista.com.mx/tecnologia/Descubren-200-paquetes-maliciosos-vinculados-al-grupo-LofyGang-20221103-0022.html', 
      img: '../assets/Imagenes/noti4.jpg'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
