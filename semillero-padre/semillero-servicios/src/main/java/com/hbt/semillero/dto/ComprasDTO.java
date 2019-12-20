package com.hbt.semillero.dto;

import java.io.Serializable;
import java.time.LocalDate;

public class ComprasDTO implements Serializable {
	
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long com_id;
	private Long com_num_dcto;
	private Long com_comic;
	private LocalDate com_fecha_compra;
	private Long com_cant;
	
	
	public Long getCom_id() {
		return com_id;
	}
	
	
	public void setCom_id(Long com_id) {
		this.com_id = com_id;
	}
	
	
	public Long getCom_num_dcto() {
		return com_num_dcto;
	}
	
	
	public void setCom_num_dcto(Long com_num_dcto) {
		this.com_num_dcto = com_num_dcto;
	}
	
	
	public Long getCom_comic() {
		return com_comic;
	}
	
	
	public void setCom_comic(Long com_comic) {
		this.com_comic = com_comic;
	}
	
	
	public LocalDate getCom_fecha_compra() {
		return com_fecha_compra;
	}
	
	
	public void setCom_fecha_compra(LocalDate com_fecha_compra) {
		this.com_fecha_compra = com_fecha_compra;
	}
	


	public Long getcom_cant() {
		return com_cant;
	}


	
	public void setcom_cant(Long com_cant) {
		this.com_cant = com_cant;
	}
	
	
	
	
	/**
	 * Método encargado de convertir los datos recibidos en JSON al tipo ComicDTO.
	 * <b>Caso de Uso:</b>
	 * 
	 * @param arg Cadena que representa el objeto complejo JSON.
	 * @return Instancia con los datos recibidos.
	 */
	public static ComprasDTO valueOf(String arg) {
		return JsonUtils.valueOf(arg, ComprasDTO.class);
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
