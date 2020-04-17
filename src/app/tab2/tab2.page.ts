import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import 'capacitor-jitsi-meet';

const { Jitsi } = Plugins;
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  async startVideo() {
    const result = await Jitsi.joinConference({
      roomName: 'room1', // room identifier for the conference
      url: 'https://meet.jit.si', // endpoint of the Jitsi Meet video bridge,
      startWithAudioMuted: true, // start with audio muted
      startWithVideoMuted: false // start with video muted
    });
  }

}