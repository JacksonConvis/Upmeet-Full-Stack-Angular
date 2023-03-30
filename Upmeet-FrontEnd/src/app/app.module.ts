import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListOfEventsComponent } from './list-of-events/list-of-events.component';
import { ListOfFavesComponent } from './list-of-faves/list-of-faves.component';

@NgModule({
  declarations: [
    AppComponent,
    ListOfEventsComponent,
    ListOfFavesComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
