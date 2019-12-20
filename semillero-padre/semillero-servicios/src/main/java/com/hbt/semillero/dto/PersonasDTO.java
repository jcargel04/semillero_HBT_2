package com.hbt.semillero.dto;

import java.io.Serializable;
import java.time.LocalDate;

public class PersonasDTO implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long per_num_dcto;
	private String per_tipo_dcto;
	private String per_nombre;
	private LocalDate per_fecha_nac;
	
	
	public Long getPer_num_dcto() {
		return per_num_dcto;
	}
	
	
	public void setPer_num_dcto(Long per_num_dcto) {
		this.per_num_dcto = per_num_dcto;
	}
	
	
	public String getPer_tipo_dcto() {
		return per_tipo_dcto;
	}
	
	
	public void setPer_tipo_dcto(String per_tipo_dcto) {
		this.per_tipo_dcto = per_tipo_dcto;
	}
	
	
	public String getPer_nombre() {
		return per_nombre;
	}
	
	
	public void setPer_nombre(String per_nombre) {
		this.per_nombre = per_nombre;
	}
	
	
	public LocalDate getPer_fecha_nac() {
		return per_fecha_nac;
	}
	
	
	public void setPer_fecha_nac(LocalDate per_fecha_nac) {
		this.per_fecha_nac = per_fecha_nac;
	}


	/**
	 * Método encargado de convertir los datos recibidos en JSON al tipo ComicDTO.
	 * <b>Caso de Uso:</b>
	 * 
	 * @param arg Cadena que representa el objeto complejo JSON.
	 * @return Instancia con los datos recibidos.
	 */
	public static PersonasDTO valueOf(String arg) {
		return JsonUtils.valueOf(arg, PersonasDTO.class);
	}
	
	
	
	/**
	 * Método encargado de convertir los datos recibidos en ComicDTO al JSON
	 * esperado
	 * 
	 * @param dto DTO
	 * 
	 * @return Json
	 */
	@Override
	public String toString() {
		return JsonUtils.toStringJson(this);
	}
}
