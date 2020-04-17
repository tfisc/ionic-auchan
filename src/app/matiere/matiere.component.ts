import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../services/utilisateur.service';
import { MatiereService } from '../services/matiere.service';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.scss'],
})
export class MatiereComponent implements OnInit {

  etudiant = undefined;

  subjects = [];

  constructor(
    private readonly utilisateurService: UtilisateurService,
    private readonly matiereService: MatiereService
  ) { }

  ngOnInit() {
    this.matiereService.getAllMatieres()
      .subscribe(data => {
        this.subjects = data;
      });
    this.etudiant = this.utilisateurService.user;
  }

  public subjectSelected(subject: string, event: any) {
    if (event.detail.checked) {
      this.etudiant.matieres.push(subject);
    } else {
      const index = this.etudiant.matieres.indexOf(subject);
      this.etudiant.matieres.splice(index, 1);
    }
    console.log(this.etudiant.matieres);

  }

  isChecked(subject: any) {
    return this.etudiant.matieres.map(data => data.idMatiere).indexOf(subject.idMatiere) !== -1;
  }
}
