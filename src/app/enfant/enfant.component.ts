import { Component, OnInit } from '@angular/core';
import { CoursService } from '../services/cours.service';
import { UtilisateurService } from '../services/utilisateur.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss'],
})
export class EnfantComponent implements OnInit {
  loading = true;
  user = undefined;
  nextLesson = undefined;
  constructor(
    private readonly sanitizer: DomSanitizer,
    private readonly coursService: CoursService,
    private readonly utilisateurService: UtilisateurService,
    private readonly router: Router
  ) { }
  prochainCours = true;
  matiere = 'Math';
  imageEtudiantSrc = '../../assets/thor.jpg';
  nomEtudiant = 'Nom étudiant';
  diplomeEtudiant = 'Master 2 physique';
  ecoleEtudiant = 'Université de montpellier';
  descriptionEtudiant = 'Je sais pas faire de maths ni d\'anglais, j\'étais en classe de 3ème avec Martos.';
  ngOnInit() {
    this.user = this.utilisateurService.user;
    this.coursService.getCoursForChild(this.user.id)
      .subscribe(
        data => {
          this.nextLesson = data.filter(lesson => lesson.idEtat.id === 2)[0];
          this.loading = false;
        }

      );
  }

  getPhoto() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
      + this.nextLesson.idEtudiant.photo);
  }

  joinLesson() {
    this.coursService.joinedCours = this.nextLesson;
    this.router.navigate(['enfant', 'jitsi']);
  }

}
