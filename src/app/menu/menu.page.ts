import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  menu = [
    {title:'Home',url:'/home',icon:'home-outline'},
    {title:'Meteo',url:'/meteo',icon:'logo-soundcloud'},
    { title: 'Stations', url: '/stations', icon: 'car-outline' },
    { title: 'Horaire', url: '/horaire', icon: 'alarm' },
    {title:'Logout',url:'logout',icon:'log-out'},
  ]
  constructor(private router : Router,
    private authService : AuthenticationService) { }

  ngOnInit() {
  }
  onClickItem(item){
    if (item.url=="logout"){
      this.authService.logout()
      this.router.navigateByUrl('/login')
    }
    else this.router.navigateByUrl(item.url)
  }
}
