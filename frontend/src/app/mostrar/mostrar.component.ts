import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.scss']
})
export class MostrarComponent implements OnInit {

  public jugador: any; // public Object jugador  <--- any es = a Object
  public pos: number;
  constructor(private http: HttpClient) {

    try {
      this.http.get('http://localhost:8080/getJugador/0').subscribe(item => {

        console.log(item);
        this.jugador = item;

      }, error => {
        // hubo un error en el api al consumilo!
        throw error;
      });
    } catch (error) {
      console.error(error);
    }
  }

  ngOnInit() {
  }

  buscar() {
    try {
      this.http.get('http://localhost:8080/getJugador/' + this.pos).subscribe(data => {
        this.jugador = data;
      }, err => {
        throw err;
      })
    } catch (error) {
      console.error(error);
    }
  }

}
