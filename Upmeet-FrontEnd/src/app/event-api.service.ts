import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Event } from "./event";
import { favorite } from "./favorite";
import { __param } from "tslib";

@Injectable({
  providedIn: "root",
})
export class EventAPIService {
  apiBaseUrl: string = "http://localhost:8080";
  // ^ this points to spring boot api backend
  baseURL: string = this.apiBaseUrl + "/events";
  faveURL: string = this.apiBaseUrl + "/favorites";

  constructor(private http: HttpClient) {}

  getAllEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.baseURL}`);
  };
  // GET /books?ownerId=...
 // getBooksByOwner(ownerId: number): Observable<Event[]> {
  //  return this.http.get<Event[]>(`${this.baseURL}`, {
  //    params: {ownerId: ownerId}
  //  });
 // };
 

  // Get by ID is not used in this application, but it's included here as an example
  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.baseURL}/${id}`);
  }
  // Use the various HTTP methods as needed.
  // All of these still return an observable. We must subscribe in the component in
  // order to trigger the actual API call.
  
  addFavorite(newFave: favorite): Observable<favorite> {
    // For POST, pass the body data as a second parameter after the URL
    return this.http.post<favorite>(`${this.faveURL}`, newFave);
  };

  deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/${id}`);
  };
}