import { IData } from './../data.interface';
import { DataService } from './../data.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-hymn-detail',
  templateUrl: './hymn-detail.page.html',
  styleUrls: ['./hymn-detail.page.scss'],
})
export class HymnDetailPage implements OnInit {
  item: IData;
  constructor(private route: ActivatedRoute, private dataService: DataService) {
  }

  ngOnInit() {
    const itemId = this.route.snapshot.paramMap.get('id');
    console.log(itemId);
    this.dataService.getHymn(+itemId).subscribe(
      res => {
        this.item = res;
      }
    );
    
  }

}
