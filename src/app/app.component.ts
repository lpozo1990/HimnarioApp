import { Component } from '@angular/core';
import { CacheService } from "ionic-cache";

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Portada',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Lista de Himnos',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Contacto',
      url: '/contact',
      icon: 'contact'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    cache: CacheService
  ) {
    this.initializeApp();
    cache.setDefaultTTL(60 * 60); //set default cache TTL for 1 hour
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
