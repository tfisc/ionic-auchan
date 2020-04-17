import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EtudiantService } from '../services/etudiant.service';
import { UtilisateurService } from '../services/utilisateur.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  wrongCredentials = false;

  login = {
    mail: '',
    password: ''
  };

  constructor(
    public router: Router,
    private readonly etudiantService: EtudiantService,
    private readonly utilisateurService: UtilisateurService
  ) { }
  parent = false;
  student = false;
  child = true;
  ngOnInit() {

  }

  loginEtudiant() {
    this.etudiantService.loginStudent(this.login)
      .subscribe(
        data => {
          this.utilisateurService.user = data;
          this.utilisateurService.setUser = data;
          this.router.navigate(['/etudiant']);
        },
        error => {
          this.wrongCredentials = true;
        }
      )
  }



}
