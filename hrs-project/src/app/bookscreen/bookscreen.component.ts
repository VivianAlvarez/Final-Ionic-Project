import { Component, OnInit } from '@angular/core';
import { AlertController, IonIcon } from '@ionic/angular';
@Component({
  selector: 'app-bookscreen',
  templateUrl: './bookscreen.component.html',
  styleUrls: ['./bookscreen.component.scss'],
})
export class BookscreenComponent{

  constructor(private alertController: AlertController) {
    
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Awesome!',
      subHeader: 'Your booking has been confirmed', 
      buttons: ['OK']
      
    });

    await alert.present();}
  }