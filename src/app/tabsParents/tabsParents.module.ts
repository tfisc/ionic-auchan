import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsParentsPageRoutingModule } from './tabsParents-routing.module';

import { TabsParentsPage } from './tabsParents.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsParentsPageRoutingModule
  ],
  declarations: [TabsParentsPage]
})
export class TabsParentsPageModule {}
