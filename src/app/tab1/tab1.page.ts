import { Component } from '@angular/core';

import { LogService } from '../services/log.service';

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(
    public log: LogService,
    public navCtrl: NavController
  ){

  }
  onPlayClicked(){
    this.log.debug("Tab1Page - OnPlayClicked - Start");
    this.log.info("Play Clicked");
    this.navCtrl.navigateForward('/play');
    this.log.debug("Tab1Page - OnPlayClicked - End");
  }
}
