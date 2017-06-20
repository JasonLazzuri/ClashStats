import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { ClanDetailComponent } from './clan-detail/clan-detail.component';
import { HomeComponent } from './home/home.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ClanDetailComponent,
    HomeComponent,
    PlayerDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
