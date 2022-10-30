import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

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
    private http:HttpClient) { }

  ngOnInit() {
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
        usuario[0]?this.router.navigate(['/usuarios']):"";
      });
  //   fetch('https://app-examen-01.herokuapp.com/api/usuarios')
  // .then(response => response.json())
  // .then(response => console.log(response))
  // .catch(err => console.error(err));
  }
}
