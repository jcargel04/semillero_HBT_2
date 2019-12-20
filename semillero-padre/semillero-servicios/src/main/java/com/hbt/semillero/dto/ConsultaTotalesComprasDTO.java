package com.hbt.semillero.dto;

public class ConsultaTotalesComprasDTO {

	private String nombreComic;
	private Long unidades;
	private Long valor_unit;
	private Long total_ventas;
	
	@SuppressWarnings("unused")
	private ConsultaTotalesComprasDTO() {
		// Vacio
	}
		
	public ConsultaTotalesComprasDTO(String nombreComic, Long unidades, Long valor_unit, Long total_ventas) {
		super();
		this.nombreComic = nombreComic;
		this.unidades = unidades;
		this.valor_unit = valor_unit;
		this.total_ventas = total_ventas;
	}
	
	
	public String getNombreComic() {
		return nombreComic;
	}
	
	
	public void setNombreComic(String nombreComic) {
		this.nombreComic = nombreComic;
	}
	
	
	public Long getUnidades() {
		return unidades;
	}
	
	
	public void setUnidades(Long unidades) {
		this.unidades = unidades;
	}
	
	
	public Long getValor_unit() {
		return valor_unit;
	}
	
	
	public void setValor_unit(Long valor_unit) {
		this.valor_unit = valor_unit;
	}
	
	
	public Long getTotal_ventas() {
		return total_ventas;
	}
	
	
	public void setTotal_ventas(Long total_ventas) {
		this.total_ventas = total_ventas;
	}


	
}
