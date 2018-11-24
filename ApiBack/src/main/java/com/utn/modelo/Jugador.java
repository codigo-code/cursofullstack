package com.utn.modelo;

import org.springframework.stereotype.Component;

@Component
public class Jugador {

	private String nombre;
	private String club;
	private String deporte;

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getClub() {
		return club;
	}

	public void setClub(String club) {
		this.club = club;
	}

	public String getDeporte() {
		return deporte;
	}

	public void setDeporte(String deporte) {
		this.deporte = deporte;
	}

}
