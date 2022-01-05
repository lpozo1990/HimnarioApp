import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CacheService } from 'ionic-cache';
import { DataService } from "../data.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imgURL = 'assets/icons8-santa-biblia-96.png';
  subscription: any;
  get noCache() {
    let isCachePresent;
    this.cache.getItem('himnos').catch(
      res => isCachePresent = res
    )
    return isCachePresent
  }
  constructor(private platform: Platform, private cache:CacheService, private dataService:DataService) { }
  ngOnInit() {
    if(!this.noCache){
      this.dataService.getHymns().subscribe()
    }
    this.subscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }

}
