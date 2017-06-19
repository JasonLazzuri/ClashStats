import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  ngOnInit () {
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
      }
  }
