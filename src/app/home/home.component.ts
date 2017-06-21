import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {
  }

  navigateToPlayer(player, clan){
    if((!player&&!clan)||(player&&clan)){
      alert('Cannot execute search')
    }
    else if(!player){
      this.router.navigate(['clan', clan]);
    }
    else{
      this.router.navigate(['player', player]);
    }
  }
}
