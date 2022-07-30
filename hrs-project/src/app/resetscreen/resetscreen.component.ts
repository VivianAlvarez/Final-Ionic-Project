import { Component, OnInit } from '@angular/core';
import { AlertController, IonIcon } from '@ionic/angular';
@Component({
  selector: 'app-resetscreen',
  templateUrl: './resetscreen.component.html',
  styleUrls: ['./resetscreen.component.scss'],
})
export class ResetscreenComponent {

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Password Updated!',
      subHeader: 'Your password has been changed successfully', 
      message: 'Use your new password to login',
      buttons: ['OK']
      
    });

    await alert.present();}

}
