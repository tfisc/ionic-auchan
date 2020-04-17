import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-plage-horaire',
  templateUrl: './plage-horaire.component.html',
  styleUrls: ['./plage-horaire.component.scss'],
})
export class PlageHoraireComponent implements OnInit {

  etudiant = undefined;
  days = ['LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI', 'SAMEDI', 'DIMANCHE'];
  selectedDay: string = undefined;
  shifts = [];
  startHour: number = undefined;
  startMinutes: number = undefined;
  endHour: number = undefined;
  endMinutes: number = undefined;

  constructor(
    private readonly utilisateurService: UtilisateurService
  ) { }

  ngOnInit() {
    this.etudiant = this.utilisateurService.user;
  }

  startHourChanged(event: any) {
    this.startHour = parseInt(moment(event.detail.value).format('HH'), 10);
    this.startMinutes = parseInt(moment(event.detail.value).format('mm'), 10);
  }

  endHourChanged(event: any) {
    this.endHour = parseInt(moment(event.detail.value).format('HH'), 10);
    this.endMinutes = parseInt(moment(event.detail.value).format('mm'), 10);
  }

  addShift() {
    const shift = {
      day: this.selectedDay,
      startHour: this.startHour,
      endHour: this.endHour,
      startMinutes: this.startMinutes,
      endMinutes: this.endMinutes
    };
    this.shifts.push(shift);
  }

  deleteShift(index: number) {
    this.shifts.splice(index, 1);
  }

  getHours(minutes: number) {
    return Math.trunc(minutes / 60);
  }

  getMinutes(minutes: number) {
    return minutes % 60;
  }
}
