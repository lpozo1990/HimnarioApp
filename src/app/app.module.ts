import { CallNumber } from '@ionic-native/call-number/ngx';
import { PipesModule } from './pipes/pipes.module';
import { DataService } from './data.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
/* Animations */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* Cache */
import { CacheModule } from "ionic-cache";
/* Storage */
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    PipesModule,
    IonicStorageModule.forRoot(),
    CacheModule.forRoot({ keyPrefix: 'my-app-cache' })
  ],
  providers: [
    StatusBar,
    CallNumber,
    DataService,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
