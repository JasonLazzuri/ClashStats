import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService} from '../api.service';

@Component({
  selector: 'app-clan-detail',
  templateUrl: './clan-detail.component.html',
  styleUrls: ['./clan-detail.component.css'],
  providers: [ApiService]
})
export class ClanDetailComponent implements OnInit {

  constructor(private apiService: ApiService, private route: ActivatedRoute, private location: Location) { }

  clanId: string;
  foundClan: any;
  data: any;
  playerTag : string;

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.clanId = urlParameters['id'];
    });
    this.apiService.call(this.clanId, 'clan').subscribe(dataLastEmittedFromObserver => {
     this.foundClan = dataLastEmittedFromObserver;
     this.data = JSON.parse(this.foundClan._body);
     this.data.memberList.forEach(function(member){
       member.tag = member.tag.substr(1);
     })
   })

  }

}
