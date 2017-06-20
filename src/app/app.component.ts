import { Component, OnInit } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  constructor(private http: Http) { }

  clanUrl = 'localhost:8080/v1/players/LYC2882J';
  key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjE5N2ZkNjI5LWM3YmMtNGViMy1hMzg1LTNjZmUxZWY3ZGJjNCIsImlhdCI6MTQ5NzQ4MzIxMiwic3ViIjoiZGV2ZWxvcGVyLzBmODMwMDgxLTAwZDUtYzdkMC1iODVjLTAxMWFmYzcyZmE2MSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjM4LjE0MC4yNy4xMDYiXSwidHlwZSI6ImNsaWVudCJ9XX0.VIIjVETfe0hoakefcQcR4JuUupPxyk2SXE0FkdkWhRf_8mr0zxRpegpFMl6IITMMhTiUY2foNTgbtaka9aE2Ig';

  call = function(){
    // let headers = new Headers();
    // headers.append('Accept', 'application/json');
    // headers.append('Authorization', `Bearer ${this.key}`);
    //
    // let options = new RequestOptions({ headers: headers });
    //
    // this.http.get(this.clanUrl, options)
    //   .toPromise()
    //   .then(console.log(this))
    //   .catch(console.log('error'))
    $.ajax({
      url: "https://api.clashofclans.com/v1/players/LYC2882J",

      method:'GET',
      headers: {
        "accept": "application/json",
        "authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjE5N2ZkNjI5LWM3YmMtNGViMy1hMzg1LTNjZmUxZWY3ZGJjNCIsImlhdCI6MTQ5NzQ4MzIxMiwic3ViIjoiZGV2ZWxvcGVyLzBmODMwMDgxLTAwZDUtYzdkMC1iODVjLTAxMWFmYzcyZmE2MSIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjM4LjE0MC4yNy4xMDYiXSwidHlwZSI6ImNsaWVudCJ9XX0.VIIjVETfe0hoakefcQcR4JuUupPxyk2SXE0FkdkWhRf_8mr0zxRpegpFMl6IITMMhTiUY2foNTgbtaka9aE2Ig"
      },

      success: function(response){
        console.log(response)
      },
      error: function(response){
        console.log(response, 'error')
      }
    })
  }



  ngOnInit ()
    {
      !function(d,s,id){
          var js: any,
              fjs=d.getElementsByTagName(s)[0],
              p='https';
          if(!d.getElementById(id)){
              js=d.createElement(s);
              js.id=id;
              js.src=p+"://platform.twitter.com/widgets.js";
              fjs.parentNode.insertBefore(js,fjs);
          }
      }
      (document,"script","twitter-wjs");

      this.call();
    }
  }
