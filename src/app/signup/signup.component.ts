import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';
import { CursusService } from '../services/cursus.service';
import { EtablissementService } from '../services/etablissement.service';
import { MatiereService } from '../services/matiere.service';
import { EtudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  student = {
    nom: '',
    prenom: '',
    mail: '',
    password: '',
    description: '',
    type: { id: 3 },
    etablissement: {},
    cursus: {},
    matieres: [],
    horaires: [],
    photo: '',
    note: 0,
  };
  cursus = [];
  etablissements = [];

  subjects = [];
  days = ['LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI', 'SAMEDI', 'DIMANCHE'];
  selectedDay: string = undefined;
  shifts = [];
  stepIndex = 1;
  startHour: number = undefined;
  startMinutes: number = undefined;
  endHour: number = undefined;
  endMinutes: number = undefined;
  photo = undefined;
  constructor(
    private readonly sanitizer: DomSanitizer,
    private readonly cursusService: CursusService,
    private readonly etablissementService: EtablissementService,
    private readonly matiereService: MatiereService,
    private readonly etudiantService: EtudiantService
  ) { }

  ngOnInit() {
    console.log(moment().format('L'));

    this.cursusService.getAllCursus()
      .subscribe(data => {
        this.cursus = data;
      });

    this.etablissementService.getAllEtablissement()
      .subscribe(data => {
        this.etablissements = data;
      });

    this.matiereService.getAllMatieres()
      .subscribe(
        data => this.subjects = data
      );
  }

  public async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      width: 400,
      height: 200,
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    });
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
      + image.base64String);
    this.student.photo = image.base64String;
  }

  public subjectSelected(subject: string, event: any) {
    if (event.detail.checked) {
      this.student.matieres.push(subject);
    } else {
      const index = this.student.matieres.indexOf(subject);
      this.student.matieres.splice(index, 1);
    }
    console.log(this.student.matieres);

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
      jour: this.selectedDay,
      dateDebut: this.startHour * 60 + this.startMinutes,
      dateFin: this.endHour * 60 + this.endMinutes,
    };
    this.shifts.push(shift);
    console.log(this.shifts);
  }

  deleteShift(index: number) {
    this.shifts.splice(index, 1);
  }

  validate() {
    this.student.horaires = this.shifts;
    console.log(this.student);
    this.etudiantService.postStudent(this.student)
      .subscribe(data => {
        console.log(data);
      });
  }
}
