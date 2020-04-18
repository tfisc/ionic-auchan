import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import 'capacitor-jitsi-meet';
import { CoursService } from '../services/cours.service';

const { Jitsi } = Plugins;
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  cours = undefined;
  loading = false;
  constructor(
    private readonly coursService: CoursService
  ) { }

  ngOnInit() {
    this.cours = this.coursService.joinedCours;
    this.startVideo();
  }

  async startVideo() {
    this.loading = true;
    const result = await Jitsi.joinConference({
      roomName: `${this.cours.date}-${this.cours.idEnfant.id}-${this.cours.idEtudiant.id}`, // room identifier for the conference
      url: 'https://meet.jit.si', // endpoint of the Jitsi Meet video bridge,
      startWithAudioMuted: true, // start with audio muted
      startWithVideoMuted: false // start with video muted
    });
    this.loading = false;
  }

}