import { Component, OnInit } from '@angular/core';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer } from '@angular/platform-browser';
import { UtilisateurService } from '../services/utilisateur.service';
import { EtudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {

  etudiant = undefined;
  photo = undefined;

  constructor(
    private readonly sanitizer: DomSanitizer,
    private readonly utilisateurService: UtilisateurService,
    private readonly etudiantService: EtudiantService
  ) { }

  ngOnInit() {
    this.etudiant = this.utilisateurService.user;
    console.log(this.etudiant);
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'
      + this.etudiant.photo);

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
    this.etudiant.photo = image.base64String;
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  }

  save() {
    this.etudiantService.postStudent(this.etudiant)
      .subscribe(
        data => console.log(data)
      );
  }
}
