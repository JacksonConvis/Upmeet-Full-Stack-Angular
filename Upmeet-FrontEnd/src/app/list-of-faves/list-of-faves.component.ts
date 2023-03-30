import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventAPIService } from '../event-api.service';
import { favorite } from '../favorite';

@Component({
  selector: 'app-list-of-faves',
  templateUrl: './list-of-faves.component.html',
  styleUrls: ['./list-of-faves.component.css']
})
export class ListOfFavesComponent implements OnInit {

  faves: favorite[] = [];
  constructor(private apiService: EventAPIService, private router: Router) {}

  ngOnInit(): void {
  
    this.loadFaves();
    
  }

  loadFaves(): void {
      
    this.apiService.getAllFave().subscribe((data: favorite[]) => {
      this.faves = data;
    });
   
  };

  deleteFaves(i:number): void{

    this.apiService.removeFaves(i).subscribe(() => 
    this.loadFaves());
    };
  };


