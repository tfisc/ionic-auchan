import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { CoursService } from '../services/cours.service';
import { UtilisateurService } from '../services/utilisateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-cours',
  templateUrl: 'liste-cours.page.html',
  styleUrls: ['liste-cours.page.scss']
})
export class listeCoursPage implements OnInit {
  user = undefined;
  upcomingCours = [];
  finishedCours = [];
  constructor(
    private readonly coursService: CoursService,
    private readonly utilisateurService: UtilisateurService,
    private readonly router: Router,
  ) { }
  ngOnInit(): void {
    moment.locale('fr');
    this.user = this.utilisateurService.user;
    this.coursService.getCoursForStudent(this.user.id)
      .subscribe(data => {
        this.upcomingCours = data.filter(cours => cours.idEtat.id === 2);
        this.finishedCours = data.filter(cours => cours.idEtat.id === 5);
      });
  }
  getFormattedData(timestamp: number) {
    return moment.unix(timestamp).format('dddd D MMMM');
  }

  getHours(minutes: number) {
    return Math.trunc(minutes / 60);
  }

  getMinutes(minutes: number) {
    return minutes % 60;
  }

  rejoindreCours(c: any) {
    this.coursService.joinedCours = c;
    this.router.navigate(['etudiant', 'tabs', 'jitsi']);
  }

}
