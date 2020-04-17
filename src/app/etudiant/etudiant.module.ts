import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { EtudiantComponent } from './etudiant.component';
import { EtudiantPageRoutingModule } from './etudiant-routing.module';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    EtudiantPageRoutingModule
  ],
  declarations: [EtudiantComponent]
})
export class EtudiantModule { }
