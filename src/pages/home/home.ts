import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { AuthService } from '../../services/auth.service';

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
		public menu: MenuController,
		public auth: AuthService
	) {}

	ionViewWillEnter() {									// Desabilitar o menu
		this.menu.swipeEnable(false)
	}

	ionViewDidLeave() {										// Habilitar o menu
		this.menu.swipeEnable(true)
	}

	login() {
		console.log(this.creds)
		this.auth.authenticate(this.creds)
			.subscribe(
				(response) => {
					console.log(response.headers.get("Authorization"))
					this.navCtrl.setRoot('CategoriasPage')              // Navegação sendo utilizada com o setRoot para não empilhar uma pagina em cima da outra
				},
				(error) => {

				}
			)
	}

}
