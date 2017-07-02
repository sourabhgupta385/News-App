import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RssServiceProvider } from '../../providers/rss-service/rss-service';

@IonicPage()
@Component({
  selector: 'page-business',
  templateUrl: 'business.html',
})
export class BusinessPage {

  public entries: any =[];

  business_url  = 'https://query.yahooapis.com/v1/public/yql?q=select%20title%2Clink%2Cdescription%2Cmedia:content.url%20from%20rss%20where%20url%3D%22'+'http://www.hindustantimes.com/rss/business/rssfeed.xml' +'%22&format=json';

  constructor(public navCtrl: NavController, public navParams: NavParams , public rssService : RssServiceProvider) {
  }

  ionViewDidLoad(){
      this.rssService.load(this.business_url).subscribe(
          data => {
              this.entries.push(data); 

          }
      );
    } 

}
