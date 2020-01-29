import { CacheService } from "ionic-cache";
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { IData } from './data.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  hymns: IData[];
  hymn: IData;
  private himnosUrl: any = 'assets/data.json';
  constructor(private http: HttpClient, private cache: CacheService) { }

  getHymns(): Observable<IData[]> {
    let request = this.http.get<IData[]>(this.himnosUrl);
    let cacheKey = this.himnosUrl;
    return this.cache.loadFromObservable(cacheKey, request);

  }

  getHymn(id: number): Observable<IData> {
    return this.getHymns().pipe(
      map(items => items.find(item => item.id === id))
    );


  }
}



