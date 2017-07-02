import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RssServiceProvider } from '../../providers/rss-service/rss-service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	 public entries: any =[];
   
   top_stories_url = 'https://query.yahooapis.com/v1/public/yql?q=select%20title%2Clink%2Cdescription%2Cmedia:content.url%20from%20rss%20where%20url%3D%22'+'http://www.hindustantimes.com/rss/topnews/rssfeed.xml'+'%22&format=json';
  
    constructor(public navCtrl: NavController , public rssService : RssServiceProvider) {

    }
    ionViewDidLoad(){
      this.rssService.load(this.top_stories_url).subscribe(
          data => {
              this.entries.push(data); 

          }
      );
    } 
    
}
