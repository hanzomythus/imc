import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weight: number = 0
  height: number = 0
  imc: number = 0
  result: string = "";

  constructor(private toastCtrl: ToastController) {}

  onCalculate() {
    if (this.height <= 0 || this.weight <= 0) {
      return
    }
    
    this.imc = this.weight / (this.height * this.height)

    let interpretation;

    if (this.imc > 0 && this.imc < 18.5){
      this.result = "MAGREZA";
    } else if (this.imc >= 18.5 && this.imc <= 24.9){
      this.result = "NORMAL";
    } else if (this.imc >= 25.5 && this.imc <= 29.9){
      this.result = "SOBREPESO";
    } else if (this.imc >= 30 && this.imc <= 39.9){
      this.result = "OBESIDADE";
    } else if (this.imc > 40){
      this.result = "OBESIDADE GRAVE";
    }

    this.showIMC()
  }

  async showIMC() {
    const toast = await this.toastCtrl.create({
      message: `IMC = ${this.imc.toFixed(2) + " - " + this.result}`,
      duration: 3000,
      color: 'secondary'
    })
    
    toast.present()

  }


}
