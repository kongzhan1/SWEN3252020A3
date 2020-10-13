import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelfDesignPage } from './self-design';

@NgModule({
  declarations: [
    SelfDesignPage,
  ],
  imports: [
    IonicPageModule.forChild(SelfDesignPage),
  ],
})
export class SelfDesignPageModule {}
