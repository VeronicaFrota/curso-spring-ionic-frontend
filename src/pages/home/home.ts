import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  login() {
    //this.navCtrl.push('CategoriasPage')               // Navegação sendo utilizada com o push empilha uma pagina em cima da outra
    this.navCtrl.setRoot('CategoriasPage')              // Navegação sendo utilizada com o setRoot para não empilhar uma pagina em cima da outra
  }

}
