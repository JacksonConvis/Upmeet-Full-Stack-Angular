import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventAPIService } from '../services/event-api.service';
import { Event } from '../services/event';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {
  newEvent: Event = { name: "", description: "", price: 0 } as any as Event;
  
  constructor(private apiService: EventAPIService, private router: Router) {}

  onSubmit(): void {
    this.apiService.addEvent(this.newEvent).subscribe(() => {
      this.router.navigate(['/events']);
    });
  }
}
