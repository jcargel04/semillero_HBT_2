package com.hbt.semillero.ejb;

import java.util.List;
import javax.ejb.Local;
import com.hbt.semillero.dto.PersonasDTO;


@Local
public interface IGestionarPersonasLocal {
	

	public void crearPersona(PersonasDTO nuevaPersona);
			
	public void editarPersona(PersonasDTO editaPersona);
		
	public void eliminarPersona(Long idPersona);
		
	public PersonasDTO consultaPersona(Long idPersona);
		
	public List<PersonasDTO> consultaTodasPersonas();
		
	
}
