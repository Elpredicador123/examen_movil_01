import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  usuarios:any = [];

  constructor(
    private router:Router,
    private http:HttpClient) { }


  ngOnInit() {
    this.ObtenerUsuarios().subscribe((res:any)=>{
      console.log("Resultado",res);
      this.usuarios = res;
    });
  }

  NavegarHome(){
    this.router.navigate(['/home']);
  }
  
  ObtenerUsuarios(){
    return this.http
    .get('https://app-examen-01.herokuapp.com/api/usuarios')
    .pipe(
      map((res:any)=>{
        return res;
      })
    );
  }
}
