import { Event } from "../event";
import { Component, OnInit } from "@angular/core";

import { EventAPIService } from '../event-api.service';
import { favorite } from "../favorite";
import { Router } from "@angular/router";

@Component({
  selector: 'app-list-of-events',
  templateUrl: './list-of-events.component.html',
  styleUrls: ['./list-of-events.component.css']
})
export class ListOfEventsComponent implements OnInit {
    events: Event[] = [];
    eD: Event | undefined;
    faveN: favorite = ({} as any) as favorite;
  

    constructor(private apiService: EventAPIService, private router: Router) {}
  
    ngOnInit(): void {
  
      this.loadEvents();
      
    }
  
    loadEvents(): void {
      
      this.apiService.getAllEvents().subscribe((data: Event[]) => {
        this.events = data;
      });
     
    };

    showDetails(i: number){

     this.apiService.getEventById(i).subscribe((data: Event) => {
      this.eD = data;
    });
    };

    makeFavorite(event: Event, fave: favorite){
      fave.id = event.id;   
      fave.name = event.name;
      fave.description = event.description;
      fave.price = event.price;

      this.apiService.addFavorite(fave).subscribe(() => this.loadEvents());
    
    }
  
  
   // addBookToShelf(book: Book): void {
   //   this.bookService.addBook(book).subscribe(() => this.loadBooks());
  //  };
  
  //  removeBookFromShelf(id: number): void {
  //    this.bookService.deleteBook(id).subscribe(() => this.loadBooks());
 //   };
  }

