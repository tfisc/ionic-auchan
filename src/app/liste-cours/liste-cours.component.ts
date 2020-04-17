import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-cours',
  templateUrl: './liste-cours.component.html',
  styleUrls: ['./liste-cours.component.scss'],
})
export class ListeCoursComponent implements OnInit {

  cours = [
    {
      matiere: "Mathematique",
      date: "Jeu. 16 avril 9h00 - 10h00",
      personne: "La daronne à brice"
    },
    {
      matiere: "Français",
      date: "Jeu. 16 avril 10h00 - 11h00",
      personne: "La daronne à brice"
    },
    {
      matiere: "Histoire",
      date: "Jeu. 16 avril 11h00 - 12h00",
      personne: "La daronne à brice"
    }
  ];
  
  constructor() { }

  ngOnInit() {}

}
