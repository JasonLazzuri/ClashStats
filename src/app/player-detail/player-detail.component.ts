import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ApiService} from '../api.service';


@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css'],
  providers: [ApiService]
})
export class PlayerDetailComponent implements OnInit {

  constructor(private apiService: ApiService, private route: ActivatedRoute, private location: Location) { }
  playerId: any;
  foundPlayer: any;
  data: any;
  imgArray = [
    '../../assets/images/artAssets/Characters/Giant.png',
    '../../assets/images/artAssets/Characters/PEKKA.png',
    '../../assets/images/artAssets/Characters/Balloon.png',
    '../../assets/images/artAssets/Characters/HogRider.png',
    '../../assets/images/artAssets/Characters/Dragon.png'
  ];
  imgStr = this.imgArray[Math.floor(Math.random()*this.imgArray.length)];
  clanTag : string;


  ngOnInit() {

    this.route.params.forEach((urlParameters) => {
      this.playerId = urlParameters['id'];
    });
    this.apiService.call(this.playerId, 'player').subscribe(dataLastEmittedFromObserver => {
     this.foundPlayer = dataLastEmittedFromObserver;
     this.data = JSON.parse(this.foundPlayer._body);
     this.data.troops.forEach(function(troop){
       troop.name = 'icon_'+troop.name.replace(/\s/g, '').toLowerCase();
     })
     this.data.spells.forEach(function(spell){
       spell.name = spell.name.replace(' Spell', '_icon');
     })
     this.data.heroes.forEach(function(hero){
       hero.name = 'icon_'+hero.name.replace(/\s/g, '').toLowerCase()+'_profile';
     })
     this.clanTag = this.data.clan.tag.substr(1);
     console.log(this.clanTag)
   })
  }

}
