import { HttpClient } from '@angular/common/http';
import { IData } from './../data.interface';
import { NavController } from '@ionic/angular';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { CacheService } from 'ionic-cache';



@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  himnos: IData[];
  count = 0;
  textBox = '';
  wannaSearch: boolean;

  constructor(public nav: NavController,
    public dataService: DataService,
    private http: HttpClient,
    private cache: CacheService) {
    this.dataService.getHymns().subscribe(
      res => {
        this.himnos = res;
      }
    );
  }

  search(event) {
    this.textBox = event.detail.value;
  }


  activateSearch() {
    this.wannaSearch = !this.wannaSearch;
  }

  ngOnInit() {
    this.wannaSearch = false;
  }

}
