import { Component, OnInit } from '@angular/core';
import { AlertController, IonIcon } from '@ionic/angular';
@Component({
  selector: 'app-piscreen',
  templateUrl: './piscreen.component.html',
  styleUrls: ['./piscreen.component.scss'],
})
export class PiscreenComponent {
  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      subHeader: 'Changes have been saved successfully', 
      buttons: ['OK']
      
      
    });

    await alert.present();}
  }