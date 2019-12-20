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
@Table(name = "COMPRAS")
public class Compras implements Serializable {

	
	private static final long serialVersionUID = 1L;
	private Long com_id;
	private Long com_num_dcto;
	private Long com_comic;
	private LocalDate com_fecha_compra;
	private Long com_cant;
	
	
	public Compras() {

	}
		
	
	@Id
	@SequenceGenerator(allocationSize = 1, name = "COMPRAS_SEQ_GENERATOR", sequenceName = "SEC_COMPRAS")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "COMPRAS_SEQ_GENERATOR")
	@Column(name = "COM_ID")
	public Long getCom_id() {
		return com_id;
	}
	
	
	public void setCom_id(Long com_id) {
		this.com_id = com_id;
	}

		
	@Column(name = "COM_NUM_DCTO")
	public Long getCom_num_dcto() {
		return com_num_dcto;
	}

		

	public void setCom_num_dcto(Long com_num_dcto) {
		this.com_num_dcto = com_num_dcto;
	}


	@Column(name = "COM_COMIC")
	public Long getCom_comic() {
		return com_comic;
	}

		

	public void setCom_comic(Long com_comic) {
		this.com_comic = com_comic;
	}

	
	@Column(name = "COM_FECHA_COMPRA")
	public LocalDate getCom_fecha_compra() {
		return com_fecha_compra;
	}

	
	
	public void setCom_fecha_compra(LocalDate com_fecha_compra) {
		this.com_fecha_compra = com_fecha_compra;
	}

	
	
	@Column(name = "COM_CANT")
	public Long getcom_cant() {
		return com_cant;
	}


	
	public void setcom_cant(Long com_cant) {
		this.com_cant = com_cant;
	}
	
	
	
	
	
	@Override
	public String toString() {
		return "Compras [com_id=" + com_id + ", com_num_dcto=" + com_num_dcto + ", com_comic=" + com_comic
				+ ", com_fecha_compra=" + com_fecha_compra + ", com_cant=" + com_cant + "]";
	}

	
	
	
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((com_cant == null) ? 0 : com_cant.hashCode());
		result = prime * result + ((com_comic == null) ? 0 : com_comic.hashCode());
		result = prime * result + ((com_fecha_compra == null) ? 0 : com_fecha_compra.hashCode());
		result = prime * result + ((com_id == null) ? 0 : com_id.hashCode());
		result = prime * result + ((com_num_dcto == null) ? 0 : com_num_dcto.hashCode());
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
		Compras other = (Compras) obj;
		if (com_cant == null) {
			if (other.com_cant != null)
				return false;
		} else if (!com_cant.equals(other.com_cant))
			return false;
		if (com_comic == null) {
			if (other.com_comic != null)
				return false;
		} else if (!com_comic.equals(other.com_comic))
			return false;
		if (com_fecha_compra == null) {
			if (other.com_fecha_compra != null)
				return false;
		} else if (!com_fecha_compra.equals(other.com_fecha_compra))
			return false;
		if (com_id == null) {
			if (other.com_id != null)
				return false;
		} else if (!com_id.equals(other.com_id))
			return false;
		if (com_num_dcto == null) {
			if (other.com_num_dcto != null)
				return false;
		} else if (!com_num_dcto.equals(other.com_num_dcto))
			return false;
		return true;
	}



	
	
}
