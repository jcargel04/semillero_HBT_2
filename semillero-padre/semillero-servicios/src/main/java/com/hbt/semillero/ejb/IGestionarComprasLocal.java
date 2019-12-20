package com.hbt.semillero.ejb;

import java.util.List;

import javax.ejb.Local;

import com.hbt.semillero.dto.ComprasDTO;
import com.hbt.semillero.dto.ConsultaTotalesComprasDTO;


@Local
public interface IGestionarComprasLocal {

	public void crearCompra(ComprasDTO nuevaCompra);
	
	public void editarCompra(ComprasDTO editaCompra);
		
	public void eliminarCompra(Long idPersona);
		
	public ComprasDTO consultaCompra(Long idCompra);
		
	public List<ComprasDTO> consultaTodasCompras();
	
	public List<ConsultaTotalesComprasDTO> consultarTotalesCompras();
	
	
}
