import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuarios:any = [];
  usuario:any = {};

  constructor(
    private router:Router,
    private http:HttpClient,
    private alertController: AlertController) { }

  ngOnInit() {
  }
  async presentAlert(texto:any) {
    const alert = await this.alertController.create({
      header: 'Aviso',
      subHeader: 'Importante',
      message: texto,
      buttons: ['OK'],
    });

    await alert.present();
  }

  login(){
    return this.http
    .get('https://app-examen-01.herokuapp.com/api/usuarios')
      .subscribe((res:any) => {
        this.usuarios = res;
        console.log(this.usuarios);
        let usuario = this.usuarios.filter((usuario:any) => {
          return usuario.usuario == this.usuario.usuario && usuario.password == this.usuario.password;
        } );
        this.usuario={};
        if(usuario.length > 0){
          this.presentAlert("Inicio de Sesion correctamente");
          this.router.navigate(['/usuarios']);
        }else
        {
          this.presentAlert("No coinciden los campos");
        }
      });
  }
}
