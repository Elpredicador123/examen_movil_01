import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  usuario:any = {};
  modal:any = {
    'mensaje':''
  };

    constructor(
    private router:Router,
    private http:HttpClient,
    private alertController: AlertController) { }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      subHeader: 'Importante',
      message: this.modal.mensaje,
      buttons: ['OK'],
    });

    await alert.present();
  }
  register(){
    //verificar campos no nulos
    if(this.usuario.usuario == null || 
      this.usuario.nombre == null || 
      this.usuario.correo == null || 
      this.usuario.foto == null || 
      this.usuario.password == null
      ){
      this.modal.mensaje = "Todos los campos son obligatorios";
      this.presentAlert();
      return;
    }
    //verificar formato correo en usuario
    if(this.usuario.correo.indexOf('@') == -1){
      this.modal.mensaje = "El correo no tiene un formato valido";
      this.presentAlert();
      return;
    }else{
      this.modal.estado = false;
    }
    this.usuario.estado = "true";
    console.log(this.usuario);
    return this.http
    .post('https://app-examen-01.herokuapp.com/api/usuarios',this.usuario)
      .subscribe((res:any) => {
        console.log(res);
        this.usuario={};
        this.modal.mensaje = "Usuario registrado con exito";
        this.presentAlert();
        this.router.navigate(['/login']);
      });
    ;
  }
}
