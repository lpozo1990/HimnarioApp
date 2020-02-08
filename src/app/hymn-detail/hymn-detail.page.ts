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
  initialFontSize = 1.2;


  constructor(private route: ActivatedRoute, private dataService: DataService) {
  }

  /* function that is launched when the long touch on the text is released */
  released() {
    this.visibleButtons = !this.visibleButtons;
  }

  /* logic to increase and decrease the font size of the paragraph */
  IncreaseFontSize(){
    this.initialFontSize += 0.5;
    console.log(this.initialFontSize);
  }

  DecreaseFontSize() {
    this.initialFontSize -= 0.5;
    console.log(this.initialFontSize);
    if (this.initialFontSize <  1.2) {
      this.initialFontSize = 1.2;
    }
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
