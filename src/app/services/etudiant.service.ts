import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  private baseUrl = environment.baseUrl;

  listAfterResearch = [];
  lessonParams = {};

  constructor(private http: HttpClient) { }

  postStudent(student): Observable<any> {
    return this.http.post(`${this.baseUrl}/etudiant/create`, student);
  }

  loginStudent(credentials): Observable<any> {
    return this.http.post(`${this.baseUrl}/etudiant/login`, credentials);
  }

  findManyStudents(search): Observable<any> {
    return this.http.post(`${this.baseUrl}/etudiant/teach`, search);
  }
}
