import { Component } from '@angular/core';
declare class JitsiMeetExternalAPI{ constructor(domain, options) };
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  ac: AppComponent = new AppComponent()
}

export class AppComponent {
  showJitsi(){
    const domain = 'meet.jit.si';
    const options = {
        roomName: 'workshopg1test',
        heigth: 700,
        parentNode: document.querySelector('#meet')
    };
    const api = new JitsiMeetExternalAPI(domain, options);
  }
}