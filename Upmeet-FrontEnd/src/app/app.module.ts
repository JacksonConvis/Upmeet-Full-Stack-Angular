import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListOfEventsComponent } from './list-of-events/list-of-events.component';
import { ListOfFavesComponent } from './list-of-faves/list-of-faves.component';
import { AddEventComponent } from './add-event/add-event.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'faves', component: ListOfFavesComponent },
  { path: 'events', component: ListOfEventsComponent },
  { path: 'add', component: AddEventComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ListOfEventsComponent,
    ListOfFavesComponent,
    AddEventComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule,RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
