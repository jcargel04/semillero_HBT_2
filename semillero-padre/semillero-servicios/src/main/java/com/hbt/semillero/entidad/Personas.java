package com.hbt.semillero.entidad;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;



@Entity
@Table(name = "PERSONAS")
public class Personas implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long per_num_dcto;
	private String per_tipo_dcto;
	private String per_nombre;
	private LocalDate per_fecha_nac;
	
	
	public Personas() {

	}

	
	@Id
	@SequenceGenerator(allocationSize = 1, name = "PERSONAS_SEQ_GENERATOR", sequenceName = "SEC_PERSONAS")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "PERSONAS_SEQ_GENERATOR")
	@Column(name = "PER_NUM_DCTO")
	public Long getPer_num_dcto() {
		return per_num_dcto;
	}

	public void setPer_num_dcto(Long per_num_dcto) {
		this.per_num_dcto = per_num_dcto;
	}

	
	
	@Column(name = "PER_TIPO_DCTO")
	public String getPer_tipo_dcto() {
		return per_tipo_dcto;
	}

	public void setPer_tipo_dcto(String per_tipo_dcto) {
		this.per_tipo_dcto = per_tipo_dcto;
	}

	
	
	@Column(name = "PER_NOMBRE")
	public String getPer_nombre() {
		return per_nombre;
	}

	public void setPer_nombre(String per_nombre) {
		this.per_nombre = per_nombre;
	}

	
	
	@Column(name = "PER_FECHA_NAC")
	public LocalDate getPer_fecha_nac() {
		return per_fecha_nac;
	}

	public void setPer_fecha_nac(LocalDate localDate) {
		this.per_fecha_nac = localDate;
	}


	
	
	@Override
	public String toString() {
		return "Personas [per_num_dcto=" + per_num_dcto + ", per_tipo_dcto=" + per_tipo_dcto + ", per_nombre="
				+ per_nombre + ", per_fecha_nac=" + per_fecha_nac + "]";
	}
	
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((per_num_dcto == null) ? 0 : per_num_dcto.hashCode());
		result = prime * result + ((per_tipo_dcto == null) ? 0 : per_tipo_dcto.hashCode());
		result = prime * result + ((per_nombre == null) ? 0 : per_nombre.hashCode());
		result = prime * result + ((per_fecha_nac == null) ? 0 : per_fecha_nac.hashCode());
		return result;
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Personas other = (Personas) obj;
		if (per_num_dcto == null) {
			if (other.per_num_dcto != null)
				return false;
		} else if (!per_num_dcto.equals(other.per_num_dcto))
			return false;
		if (per_tipo_dcto == null) {
			if (other.per_tipo_dcto != null)
				return false;
		} else if (!per_tipo_dcto.equals(other.per_tipo_dcto))
			return false;
		if (per_nombre == null) {
			if (other.per_nombre != null)
				return false;
		} else if (!per_nombre.equals(other.per_nombre))
			return false;
		if (per_fecha_nac == null) {
			if (other.per_fecha_nac != null)
				return false;
		} else if (!per_fecha_nac.equals(other.per_fecha_nac))
			return false;
		return true;
	}
	
	
}
