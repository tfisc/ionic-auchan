import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-plage-horaire',
  templateUrl: './plage-horaire.component.html',
  styleUrls: ['./plage-horaire.component.scss'],
})
export class PlageHoraireComponent implements OnInit {

  days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  selectedDay: string = undefined;
  shifts = [];
  stepIndex = 1;
  startHour: number = undefined;
  startMinutes: number = undefined;
  endHour: number = undefined;
  endMinutes: number = undefined;
  
  constructor() { }

  ngOnInit() {}

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
}
