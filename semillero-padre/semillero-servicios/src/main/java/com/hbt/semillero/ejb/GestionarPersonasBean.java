package com.hbt.semillero.ejb;

import java.util.ArrayList;
import java.util.List;

import javax.ejb.Stateless;
import javax.ejb.TransactionAttribute;
import javax.ejb.TransactionAttributeType;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import com.hbt.semillero.dto.PersonasDTO;
import com.hbt.semillero.entidad.Personas;


@Stateless
@TransactionManagement(TransactionManagementType.CONTAINER)
public class GestionarPersonasBean implements IGestionarPersonasLocal {

	
	@PersistenceContext
	private EntityManager em;
	
	
	
	
	@TransactionAttribute(TransactionAttributeType.REQUIRES_NEW)
	public void crearPersona(PersonasDTO nuevaPersona) {
		Personas personas = convertirPersonasDTOAPersonas(nuevaPersona);
		em.persist(personas);
		em.flush();
	}

	
	
	
	
	@TransactionAttribute(TransactionAttributeType.REQUIRED)
	public void editarPersona(PersonasDTO editaPersona) {
		Personas personaModificar;
		personaModificar = em.find(Personas.class, editaPersona.getPer_num_dcto());
		
		personaModificar.setPer_tipo_dcto(editaPersona.getPer_tipo_dcto());
		personaModificar.setPer_nombre(editaPersona.getPer_nombre());
		personaModificar.setPer_fecha_nac(editaPersona.getPer_fecha_nac());	
		em.merge(personaModificar);
		em.flush();
	}

	


	
	@TransactionAttribute(TransactionAttributeType.REQUIRED)
	public void eliminarPersona(Long idPersona) {
		Personas personasAEliminar = em.find(Personas.class, idPersona);
		if (personasAEliminar != null) {
			em.remove(personasAEliminar);
			em.flush();
		}		
	}

	
	
	
	
	@TransactionAttribute(TransactionAttributeType.NOT_SUPPORTED)
	public PersonasDTO consultaPersona(Long idPersona) {
		Personas personas = null;
		personas = new Personas();
		personas = em.find(Personas.class, idPersona);
		em.flush();
		PersonasDTO personasDTO = convertirPersonasAPersonasDTO(personas);
		return personasDTO;
	}

	
	
	
	
	@TransactionAttribute(TransactionAttributeType.NOT_SUPPORTED)
	public List<PersonasDTO> consultaTodasPersonas() {
		List<PersonasDTO> resultadosPersonasDTO = new ArrayList<PersonasDTO>();
		@SuppressWarnings("unchecked")
		List<Personas> resultadosPersonas = em.createQuery("Select p from Personas p").getResultList();
		for (Personas personas:resultadosPersonas) {
			resultadosPersonasDTO.add(convertirPersonasAPersonasDTO(personas));
		}
		return resultadosPersonasDTO;
	}



	
	
		
	private Personas convertirPersonasDTOAPersonas(PersonasDTO personasDTO) {
		Personas personas = new Personas();
		if(personasDTO.getPer_num_dcto()!=null) {
			personas.setPer_num_dcto(personasDTO.getPer_num_dcto());
		}
		personas.setPer_tipo_dcto(personasDTO.getPer_tipo_dcto());
		personas.setPer_nombre(personasDTO.getPer_nombre());
		personas.setPer_fecha_nac(personasDTO.getPer_fecha_nac());
		return personas;
	}
	
	
	
	private PersonasDTO convertirPersonasAPersonasDTO(Personas personas) {
		PersonasDTO personasDTO = new PersonasDTO();
		//if(personas.getPer_num_dcto()!=null) {
			
		//}
		personasDTO.setPer_num_dcto(personas.getPer_num_dcto());
		personasDTO.setPer_tipo_dcto(personas.getPer_tipo_dcto());
		personasDTO.setPer_nombre(personas.getPer_nombre());
		personasDTO.setPer_fecha_nac(personas.getPer_fecha_nac());
		return personasDTO;
	}
	
	
}
