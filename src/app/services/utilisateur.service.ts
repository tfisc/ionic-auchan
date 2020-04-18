import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  user = undefined;
  baseUrl = environment.baseUrl;
  constructor(
    private readonly http: HttpClient
  ) { }


  async setUser(user: any) {
    await Storage.set({
      key: 'user',
      value: JSON.stringify(user)
    });
  }

  async getUser() {
    const ret = await Storage.get({ key: 'user' });
    const user = JSON.parse(ret.value);
    return user;
  }

  async removeUser() {
    await Storage.remove({ key: 'user' });
  }

  login(info): Observable<any> {
    return this.http.post(`${this.baseUrl}/utilisateur/login`, info);
  }

  loginEnfant(info): Observable<any> {
    return this.http.post(`${this.baseUrl}/enfant/login`, info);
  }

}
