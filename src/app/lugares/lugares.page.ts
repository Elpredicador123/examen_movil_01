import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from "rxjs/operators";

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
})
export class LugaresPage implements OnInit {

  lugares:any = [];
  constructor(private http:HttpClient) { }


  ngOnInit() {
    this.ObtenerLugares().subscribe(res=>{
      console.log("Resultado",res);
      this.lugares=res;
    });

  }
  ObtenerLugares(){
    return this.http
    .get("assets/archivos/lugares.json")
    .pipe(
          map((res:any) =>{
             return res.data;
     })
     )
    }
}
