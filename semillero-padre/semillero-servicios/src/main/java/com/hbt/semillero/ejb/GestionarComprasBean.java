package com.hbt.semillero.ejb;

import java.util.List;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.management.Query;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import com.hbt.semillero.dto.ComprasDTO;
import com.hbt.semillero.dto.ConsultaTotalesComprasDTO;
import com.hbt.semillero.entidad.Compras;




@Stateless
@TransactionManagement(TransactionManagementType.CONTAINER)
public class GestionarComprasBean implements IGestionarComprasLocal {
	
	@PersistenceContext
	private EntityManager em;

	
	
	
	@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
	public void crearCompra(ComprasDTO nuevaCompra) {
		Compras compras = convertirComprasDTOACompras(nuevaCompra);
		em.persist(compras);
		em.flush();
	}

	
	
	@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
	public void editarCompra(ComprasDTO editaCompra) {
		// TODO Auto-generated method stub
		
	}

	
	
	@TransactionAttribute(TransactionAttributeType.REQUIRED)
	public void eliminarCompra(Long idPersona) {
		// TODO Auto-generated method stub
		
	}

	
	
	@TransactionAttribute(TransactionAttributeType.NOT_SUPPORTED)
	public ComprasDTO consultaCompra(Long idCompra) {
		// TODO Auto-generated method stub
		return null;
	}

	
	
	@TransactionAttribute(TransactionAttributeType.NOT_SUPPORTED)
	public List<ComprasDTO> consultaTodasCompras() {
		// TODO Auto-generated method stub
		return null;
	}
	
	
	
	@SuppressWarnings("unchecked")
	@Override
	public List<ConsultaTotalesComprasDTO> consultarTotalesCompras() {
		try {
			StringBuilder sb = new StringBuilder();
//			sb.append("SELECT new com.hbt.semillero.dto.ConsultaTotalesComprasDTO(Comic.SCNOMBRE, SUM(COMPRAS.com_cant), Comic.SCPRECIO, (SUM(Compras.com_cant) * Comic.SCPRECIO))");
//			sb.append("FROM Compras INNER JOIN ");
//			sb.append("JOIN Compras.Comic ");
//			sb.append("JOIN Compras.Personas ");
//			sb.append("GROUP BY Compras.SCNOMBRE, Comic.SCPRECIO");
			
			sb.append("SELECT new com.hbt.semillero.dto.ConsultaTotalesComprasDTO(Comic.nombre, SUM(Compras.com_cant), Comic.precio, (SUM(Compras.com_cant) * Comic.precio) FROM Compras INNER JOIN Comic ON Comic.id = Compras.com_comic INNER JOIN Personas ON Personas.per_num_dcto = Compras.com_num_dcto group by Comic.nombre, Comic.precio)");
			
			return em.createQuery(sb.toString()).getResultList();
		} catch (Exception e) {
			System.out.print("Error al generar la consulta de totales");
		}
		
		
		return null;
	}
	
	
	
	
	
		
	
	private Compras convertirComprasDTOACompras(ComprasDTO comprasDTO) {
		Compras compras = new Compras();
		if(comprasDTO.getCom_id()!=null) {
			compras.setCom_id(comprasDTO.getCom_id());
		}
		compras.setCom_num_dcto(comprasDTO.getCom_num_dcto());
		compras.setCom_comic(comprasDTO.getCom_comic());
		compras.setCom_fecha_compra(comprasDTO.getCom_fecha_compra());
		compras.setcom_cant(comprasDTO.getcom_cant());
		return compras;
	}




	

}
