import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HymnDetailPageRoutingModule } from './hymn-detail-routing.module';

import { HymnDetailPage } from './hymn-detail.page';
import { LongPressModule } from 'ionic-long-press';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HymnDetailPageRoutingModule,
    LongPressModule
  ],
  declarations: [HymnDetailPage]
})
export class HymnDetailPageModule {}
