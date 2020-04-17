import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  postStudent(student): Observable<any> {
    return this.http.post(`${this.baseUrl}/etudiant/create`, student);
  }
}
