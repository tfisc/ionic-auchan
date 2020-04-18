import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { CoursService } from '../services/cours.service';
import { UtilisateurService } from '../services/utilisateur.service';
import * as moment from 'moment';

@Component({
  selector: 'app-demande-cours',
  templateUrl: './demande-cours.component.html',
  styleUrls: ['./demande-cours.component.scss'],
})
export class DemandeCoursComponent implements OnInit {
  user = undefined;
  cours = [];
  constructor(
    private readonly coursService: CoursService,
    private readonly utilisateurService: UtilisateurService,
  ) { }

  ngOnInit() {
    moment.locale('fr');
    this.user = this.utilisateurService.user;
    this.coursService.getCoursForStudent(this.user.id)
      .subscribe(data => this.cours = data.filter(cours => cours.idEtat.id === 1));
  }

  public accept(cours: any) {
    const updatedCours = {
      id: cours.id,
      idEtat: { id: 2 }
    };
    this.coursService.postCours(updatedCours)
      .subscribe(
        response => {
          this.coursService.getCoursForStudent(this.user.id)
            .subscribe(data => this.cours = data.filter(lesson => lesson.idEtat.id === 1));
        }
      )
  }

  public refuse(cours: any) {
    const updatedCours = {
      id: cours.id,
      idEtat: { id: 3 }
    };
    this.coursService.postCours(updatedCours)
      .subscribe(
        response => {
          this.coursService.getCoursForStudent(this.user.id)
            .subscribe(data => this.cours = data.filter(lesson => lesson.idEtat.id === 1));
        }
      );
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
}
