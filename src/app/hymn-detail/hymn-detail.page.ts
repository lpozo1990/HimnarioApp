import { IData } from './../data.interface';
import { DataService } from './../data.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hymn-detail',
  templateUrl: './hymn-detail.page.html',
  styleUrls: ['./hymn-detail.page.scss'],
})
export class HymnDetailPage implements OnInit {
  item: IData;
  body;
  visibleButtons: boolean;


  constructor(private route: ActivatedRoute, private dataService: DataService) {
  }
  released() {
    this.visibleButtons = !this.visibleButtons;
  }

  ngOnInit() {
    this.visibleButtons = false;
    const itemId = this.route.snapshot.paramMap.get('id');
    this.dataService.getHymn(+itemId).subscribe(
      res => {
        this.item = res;
        /* visit this url to see the regular expression in action: https://regex101.com/r/tSzc7D/3 */
        /* Ok, first we look for the text between chorus and paragraph 2, then we surround it with the <b> tags to make it bold */
        this.body = this.item.body.replace(/((-- Coro --)([\S\s]*?)(-- 2 --))/igm,"$2 <b> $3 </b> $4");
      }
    );
    
  }

}
