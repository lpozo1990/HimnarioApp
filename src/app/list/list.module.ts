import { PipesModule } from './../pipes/pipes.module';
import { SearchPipe } from './../pipes/search.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ListPage } from './list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    RouterModule.forChild([
      {
        path: '',
        component: ListPage
      }
    ]),
  ],
  declarations: [ListPage]
})
export class ListPageModule { }
