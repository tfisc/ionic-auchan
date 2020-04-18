import { Component, OnInit } from '@angular/core';
import { MatiereService } from '../services/matiere.service';
import * as moment from 'moment';
import { EtudiantService } from '../services/etudiant.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-recherche-cours',
  templateUrl: 'recherche-cours.page.html',
  styleUrls: ['recherche-cours.page.scss']
})
export class rechercheCoursPage implements OnInit {

  search = {
    jour: '',
    matiere: {},
    dateDebut: 0,
    dateFin: 0,
  }
  options = {
    height: '100%'
  };


  date = 0;

  subjects = [];

  constructor(
    private readonly matiereService: MatiereService,
    private readonly etudiantService: EtudiantService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.matiereService.getAllMatieres()
      .subscribe(
        data => {
          this.subjects = data;
        })
  }

  startHourChanged(event: any) {
    this.search.dateDebut = parseInt(moment(event.detail.value).format('HH'), 10) * 60
      + parseInt(moment(event.detail.value).format('mm'), 10);
  }

  endHourChanged(event: any) {
    this.search.dateFin = parseInt(moment(event.detail.value).format('HH'), 10) * 60
      + parseInt(moment(event.detail.value).format('mm'), 10);
  }

  dateChanged(event: any) {
    this.date = moment(event.detail.value).valueOf();
    switch (moment(event.detail.value).day()) {
      case 0:
        this.search.jour = 'DIMANCHE';
        break;
      case 1:
        this.search.jour = 'LUNDI';
        break;
      case 2:
        this.search.jour = 'MARDI';
        break;
      case 3:
        this.search.jour = 'MERCREDI';
        break;
      case 4:
        this.search.jour = 'JEUDI';
        break;
      case 5:
        this.search.jour = 'VENDREDI';
        break;
      case 6:
        this.search.jour = 'SAMEDI';
        break;

      default:
        break;
    }
  }

  findStudents() {
    this.etudiantService.findManyStudents(this.search)
      .subscribe(
        data => {
          console.log(data);
          this.etudiantService.listAfterResearch = data;
          this.search['date'] = this.date;
          this.etudiantService.lessonParams = this.search
          this.router.navigate(['parents', 'recherche-cours', 'resultat']);
        }
      );
  }
}
