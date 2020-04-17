import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  user = undefined;
  constructor() { }


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

}
