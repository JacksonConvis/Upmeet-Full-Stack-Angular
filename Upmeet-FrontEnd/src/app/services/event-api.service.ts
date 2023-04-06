import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Event } from "../interfaces/event";
import { favorite } from "../interfaces/favorite";
import { __param } from "tslib";

@Injectable({
  providedIn: "root",
})
export class EventAPIService {
  [x: string]: any;
  apiBaseUrl: string = "http://localhost:8080";
  // ^ this points to spring boot api backend
  baseURL: string = this.apiBaseUrl + "/events";
  faveURL: string = this.apiBaseUrl + "/favorites";

  constructor(private http: HttpClient) {}

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseURL}`);
  };

  getAllFave(): Observable<favorite[]> {
    return this.http.get<favorite[]>(`${this.faveURL}`);
  };

 addEvent(newEvent: Event): Observable<Event> {
  return this.http.post<Event>(`${this.baseURL}`, newEvent);
};
 

  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.baseURL}/${id}`);
  }
  
  addFavorite(newFave: favorite): Observable<favorite> {
    return this.http.post<favorite>(`${this.faveURL}`, newFave);
  };

  removeFaves(id: number): Observable<void> {
    return this.http.delete<void>(`${this.faveURL}/${id}`);
  };

  
}