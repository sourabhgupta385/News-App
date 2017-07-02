import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RssServiceProvider {
  
  constructor(public http: Http) {
    this.http = http;
  }

  load(url) {

        return Observable.create(s => {
        	this.http.get(url).map(res => res.json()).subscribe(data => {
           		var items = data.query.results.item;
           		items.forEach(i=>s.next(i));
           		s.complete();
        });
      });
 }
}