import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import * as $ from 'jquery';
import { apiKeyMaster } from './api-keys';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  call(id,type){
    let url: string;
    if(type==='player'){
      url = "https://api.clashofclans.com/v1/players/%23"+id
    }
    else{
      url = "https://api.clashofclans.com/v1/clans/%23"+id
    }

    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Authorization', `Bearer ${apiKeyMaster}`);

    let options = new RequestOptions({ headers: headers });

    return this.http.get(url, options)


    // $.ajax({
    //   url: url,
    //
    //   method:'GET',
    //   headers: {
    //     "accept": "application/json",
    //     "authorization": "Bearer "+apiKeyMaster
    //   },
    //   success: function(response){
    //     console.log(response)
    //     return response;
    //   },
    //   error: function(response){
    //     console.log(response, 'error')
    //   }
    // })
  }
}
