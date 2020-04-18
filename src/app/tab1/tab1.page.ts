import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../services/etudiant.service';
import { DomSanitizer } from '@angular/platform-browser';
import { UtilisateurService } from '../services/utilisateur.service';
import { CoursService } from '../services/cours.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  students = [];
  lessonParams;

  cours = {
    date: 0,
    plageHoraire: {},
    idEtat: { id: 1 },
    idEnfant: {},
    idEtudiant: {},
    idMatiere: {},
  }

  options = {
    height: '100%'
  };

  constructor(
    private readonly etudiantService: EtudiantService,
    private readonly utilisateurService: UtilisateurService,
    private readonly coursService: CoursService,
    private readonly sanitizer: DomSanitizer,
  ) { }
  ngOnInit(): void {
    this.students = this.etudiantService.listAfterResearch;
    this.lessonParams = this.etudiantService.lessonParams;
    console.log(this.lessonParams);

  }

  getPhoto(student: any) {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
      + student.photo);
  }


  askLesson(studentIndex: number) {
    const cours = {
      date: this.lessonParams.date,
      plageHoraire: this.lessonParams,
      idEtat: { id: 1 },
      idEnfant: this.utilisateurService.user.enfants[0],
      idEtudiant: this.students[studentIndex],
      idMatiere: this.lessonParams.matiere,
    };
    this.coursService.postCours(cours)
      .subscribe(data => console.log(data)
      );
  }

}
