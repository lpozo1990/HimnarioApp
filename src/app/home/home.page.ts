import { Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imgURL = 'assets/icons8-santa-biblia-96.png';
  subscription: any;
  constructor(private platform: Platform) { }

  ngOnInit() {
    this.subscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
      console.log("exitapp!!!");
    });
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
    console.log("exitapp again!!!");
  }

}
