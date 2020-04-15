import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  subjects = ['Mathématiques', 'Français', 'Anglais', 'SVT', 'Physique', 'Chimie', 'Espagnol', 'Allemand'];
  days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  selectedDay: string = undefined;
  shifts = [];
  stepIndex = 1;
  startHour: number = undefined;
  startMinutes: number = undefined;
  endHour: number = undefined;
  endMinutes: number = undefined;
  photo = undefined;
  constructor(private readonly sanitizer: DomSanitizer) { }

  ngOnInit() { }

  public async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      width: 400,
      height: 200,
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  }

  public subjectSelected(subject: string) {
    console.log(subject);
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
}
