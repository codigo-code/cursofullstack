package com.utn.rest;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.utn.modelo.Jugador;

@RestController
public class JugadorRest {

	ArrayList<Jugador> listaJugador;

	public JugadorRest() {
		this.listaJugador = new ArrayList<>();
		// MOCK!!!!
		Jugador j = new Jugador();
		j.setNombre("Berto");
		j.setDeporte("Basquet");
		j.setClub("San Lorenzo");
		this.listaJugador.add(j);
	}

	// http://localhost:8080/getJugador/pos = 0,1 ,2 3
	@GetMapping(value = "/getJugador/{pos}")
	public Jugador devuelvoJugador(@PathVariable("pos") int pos) {
		// si no tenemos la posicion de la lista nos arrojara una excepcion
		return this.listaJugador.get(pos);
	}

	@PostMapping(value = "/saveJugador")
	public boolean guardoJugador(@RequestBody Jugador jug) {
		try {
			this.listaJugador.add(jug);
			return true;
		} catch (Exception e) {
			return false;
		}
	}

}
