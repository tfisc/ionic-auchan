import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RejoindreCoursComponent } from './rejoindre-cours.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: RejoindreCoursComponent }])
  ],
  declarations: [RejoindreCoursComponent]
})
export class RejoindreCoursModule { }
