import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.scss']
})
export class GuardarComponent implements OnInit {

  public nombre: String; // document.getElementByTagName("nombre").value
  public deporte: String;
  public club: String;
  public mensaje: String;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  guardoJugador() {
    const jugador = {
      'nombre': this.nombre,
      'club': this.club,
      'deporte': this.deporte
    };

    try {
      this.http.post('http://localhost:8080/saveJugador', jugador).subscribe(callback => {
        if (callback) {
          console.log('se guardo correctamente!!!');
          this.mensaje = 'Se guardo correctamente!!!';
        }
      }, err => {
        throw err;
      });
    } catch (error) {
      this.mensaje = 'Hubo un error por favor contacte con el adminsitrador o vea el log!';
      console.error(error);
    }
  }
}
