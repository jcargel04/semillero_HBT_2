package com.hbt.semillero.rest;

import java.util.List;

import javax.ejb.EJB;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.hbt.semillero.dto.ComprasDTO;
import com.hbt.semillero.dto.ConsultaTotalesComprasDTO;
import com.hbt.semillero.dto.ResultadoDTO;
import com.hbt.semillero.ejb.IGestionarComprasLocal;


@Path("/GestionarCompras")
public class GestionarComprasRest {

	@EJB
	private IGestionarComprasLocal gestionarComprasEJB;
	

	@GET
	@Path("/home")
	@Produces(MediaType.APPLICATION_JSON)
	public String home() {
		return "Bienvenido a la Gestión de Compras de la Aplicación";
	}
	
	
	
	
	@POST
	@Path("/crearCompra")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public ResultadoDTO crearCompra(ComprasDTO nuevaCompra) {
		gestionarComprasEJB.crearCompra(nuevaCompra);
		ResultadoDTO resultadoDTO = new ResultadoDTO(Boolean.TRUE, "La Compra fue exitosa");
		return resultadoDTO;
	}
	
	
	
	
	@GET
	@Path("/consultarTotalesCompras")
	@Produces(MediaType.APPLICATION_JSON)
	public Response consultarTotalesCompras() {
		try {
			List<ConsultaTotalesComprasDTO> listaTotales = gestionarComprasEJB.consultarTotalesCompras();
			System.out.print(listaTotales);
			return Response.status(Response.Status.OK)
			.entity(listaTotales)
			.build();
		} catch (Exception e) {
			System.out.print("Error al generar el servicio de consultarTotalesCompras");
			return Response.status(Response.Status.BAD_REQUEST)
					.entity(null)
					.build();
		}
		
	
	}

}