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

  childCode;

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
    this.wrongCredentials = false;
    this.etudiantService.loginStudent(this.login)
      .subscribe(
        data => {
          this.utilisateurService.user = data;
          this.utilisateurService.setUser(data);
          this.router.navigate(['/etudiant']);
        },
        error => {
          this.wrongCredentials = true;
        }
      )

  }

  loginParent() {
    this.wrongCredentials = false;
    this.utilisateurService.login(this.login)
      .subscribe(
        data => {
          this.utilisateurService.user = data;
          this.utilisateurService.setUser(data);
          this.router.navigate(['/parents']);
        },
        error => {
          this.wrongCredentials = true;
        }
      );
  }

  loginEnfant() {
    this.wrongCredentials = false;
    this.utilisateurService.loginEnfant({ code: this.childCode })
      .subscribe(
        data => {
          this.utilisateurService.user = data;
          this.utilisateurService.setUser(data);
          this.router.navigate(['/enfant']);
        },
        error => {
          this.wrongCredentials = true;
        }
      );
  }
}
