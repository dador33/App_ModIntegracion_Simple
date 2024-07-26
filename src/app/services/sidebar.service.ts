import { Injectable } from '@angular/core';
import { Sidebar } from '../core/interface/sidebar.interface';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private apiUrl = 'https://localhost:7204/api/SideBar';

  constructor(private http: HttpClient) {}

  getSidebarItems(): Observable<Sidebar[]> {
    console.log(this.apiUrl);
    return this.http.get<Sidebar[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    // Handle error appropriately, e.g., log to console, display error message
    console.error('An error occurred:', error);
    return throwError(() => new Error('Failed to retrieve sidebar items'));
  }
}
