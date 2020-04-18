import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  joinedCours = undefined;

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  postCours(cours: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/cours/create`, cours);
  }

  getCoursForStudent(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/cours/etudiant/${id}`);
  }

  getCoursForChild(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/cours/enfant/${id}`);
  }
}
