import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './enfant.component.html',
  styleUrls: ['./enfant.component.scss'],
})
export class EnfantComponent implements OnInit {

  constructor() { }
  prochainCours = false;
  matiere = 'Math';
  imageEtudiantSrc = '../../assets/thor.jpg';
  nomEtudiant = 'Nom étudiant';
  diplomeEtudiant = 'Master 2 physique';
  ecoleEtudiant = 'Université de montpellier';
  descriptionEtudiant = 'Je sais pas faire de maths ni d\'anglais, j\'étais en classe de 3ème avec Martos.';
  ngOnInit() { }

}
