import { ArrayType } from '@angular/compiler';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public num1! : number;
  public num2! : number;
  public operacao! : string;

  constructor(private alertController: AlertController) {}

  calcular(){
    var num1: number = this.num1;
    var num2: number = this.num2;

    if (this.num1 && this.num2 && this.operacao) {
      //let novo : Contato = new Contato(this.nome, this.telefone);
      if(this.operacao == 'adic'){
        var resultado: number = num1 + num2;
        this.presentAlert('O resultado é:', resultado);
      }
      if(this.operacao == 'subt'){
        var resultado: number = num1 - num2;
        this.presentAlert('O resultado é:', resultado);
      }
      if(this.operacao == 'div'){
        var resultado: number = num1 / num2;
        this.presentAlert('O resultado é:', resultado);
      }
      if(this.operacao == 'mult'){
        var resultado: number = num1 * num2;
        this.presentAlert('O resultado é:', resultado);
      }
    }else {
      this.presentAlert("Erro no cálculo!", "Todos os campos são obrigatórios!");
    }    

  this.num1 = NaN;
  this.num2 = NaN;
  this.operacao = "";
  
}
  async presentAlert(subHeader: string, message: any) {
    const alert = await this.alertController.create({
      header: 'Calculadora',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });

  await alert.present();
}
}
