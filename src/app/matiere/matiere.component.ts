import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.scss'],
})
export class MatiereComponent implements OnInit {

  subjects = ['Mathématiques', 'Français', 'Anglais', 'SVT', 'Physique', 'Chimie', 'Espagnol', 'Allemand'];

  constructor() { }

  ngOnInit() {}

  public subjectSelected(subject: string) {
    console.log(subject);
  }
}
