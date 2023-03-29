import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Event } from "./event";

@Injectable({
  providedIn: "root",
})
export class EventAPIService {
  apiBaseUrl: string = "http://localhost:8080";
  // The base URL points to our Java Spring Boot backend.
  // This is set in environment.ts. It could be localhost or it could be deployed on AWS.
  baseURL: string = this.apiBaseUrl + "/events";

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
  
  addEvent(newEvent: Event): Observable<Event> {
    // For POST, pass the body data as a second parameter after the URL
    return this.http.post<Event>(`${this.baseURL}`, newEvent);
  };
  deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseURL}/${id}`);
  };
}