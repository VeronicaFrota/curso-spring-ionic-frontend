import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { CredenciaisDTO } from '../../models/credenciais.dto';

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	creds: CredenciaisDTO = {
		email: "",
		senha: ""
	}

	constructor(
		public navCtrl: NavController,
		public menu: MenuController
	) {}

	ionViewWillEnter() {									// Desabilitar o menu
		this.menu.swipeEnable(false)
	}

	ionViewDidLeave() {										// Habilitar o menu
		this.menu.swipeEnable(true)
	}

	login() {
		//this.navCtrl.push('CategoriasPage')               // Navegação sendo utilizada com o push empilha uma pagina em cima da outra
		console.log(this.creds)
		this.navCtrl.setRoot('CategoriasPage')              // Navegação sendo utilizada com o setRoot para não empilhar uma pagina em cima da outra
	}

}
