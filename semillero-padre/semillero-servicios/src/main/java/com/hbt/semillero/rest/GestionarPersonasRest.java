package com.hbt.semillero.rest;

import java.util.List;

import javax.ejb.EJB;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import com.hbt.semillero.dto.PersonasDTO;
import com.hbt.semillero.dto.ResultadoDTO;
import com.hbt.semillero.ejb.IGestionarPersonasLocal;



@Path("/GestionarPersonas")
public class GestionarPersonasRest {

	
	
	@EJB
	private IGestionarPersonasLocal gestionarPersonasEJB;
		
	
		
	@GET
	@Path("/home")
	@Produces(MediaType.APPLICATION_JSON)
	public String home() {
		return "Bienvenido a la Gestión de Personas de la Aplicación";
	}
	
	
	
	
	@POST
	@Path("/crearPersonas")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public ResultadoDTO crearPersona(PersonasDTO nuevaPersona) {
		gestionarPersonasEJB.crearPersona(nuevaPersona);
		ResultadoDTO resultadoDTO = new ResultadoDTO(Boolean.TRUE, "Persona creada exitosamente");
		return resultadoDTO;
		
	}
	
	
	
	
	
	@GET
	@Path("/consultaTodasPersonas")
	@Produces(MediaType.APPLICATION_JSON)
	public List<PersonasDTO> consultarATodasLasPersonas() {
		return gestionarPersonasEJB.consultaTodasPersonas();
	}	
	
	
	
	@GET
	@Path("/consultarPersonas")
	@Produces(MediaType.APPLICATION_JSON)
	public PersonasDTO consultarPersonas(@QueryParam("num_dcto") Long num_dcto) {
		if (num_dcto != null) {
			PersonasDTO personasDTO = gestionarPersonasEJB.consultaPersona(num_dcto);
			return personasDTO;
		}
		return null;
	}
		
		
		
}
	
	
	
