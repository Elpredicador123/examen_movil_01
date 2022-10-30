import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})
export class ClientesPage implements OnInit {

  clientes:any = [];

  constructor(
    private router:Router,
    private http:HttpClient) { }


  ngOnInit() {
    this.ObtenerClientes().subscribe((res:any)=>{
      console.log("Resultado",res.data);
      this.clientes = res.data;
    });
  }

  NavegarHome(){
    this.router.navigate(['/home']);
  }
  
  ObtenerClientes(){
    return this.http
    .get('assets/archivos/clientes.json')
    .pipe(
      map((res:any)=>{
        return res;
      })
    );
  }
}
