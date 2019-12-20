import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GestionarPersonasService } from '../../services/gestionar-personas.service';
import { PersonasDTO } from '../../dto/personas.dto';

/**
 * @description Esta clase permite relacionar Compras con personas
 * @author Juan Carlos Argel
 */
@Component({
    selector: 'gestionar-compras',
    templateUrl: './gestion-compras.html'
})


export class CrearPersonaComponent implements OnInit{

        constructor(private fb : FormBuilder, 
            private router : Router, 
            private gestionarPersonasService : GestionarPersonasService ) {
            // this.gestionarPersonasForm = this.fb.group({
            //     per_num_dcto : [null],
            //     per_tipo_dcto : [null],
            //     per_nombre : [null],
            //     per_fecha_nac : [null]
            // });
        }
    
        /**
         * @description Evento angular que se ejecuta al invocar el componente
         * @author Juan Carlos Argel
         */
        ngOnInit(): void {
            console.log("Ingreso al evento oninit");
           
            
            // this.consultarPersonas();
        }
    


        // private consultarPersonas() : void {

        //     this.gestionarPersonasService.consultarPersonas().subscribe(listaPersonas => {
        //         this.listaPersonas = listaPersonas
        //         console.log(JSON.stringify(this.listaPersonas));
        //     }, error => {
        //         console.log("Se ha presentado un error al consumir el servicio de consultarPersonas: " + error);
        //     });
        // }
    
        
        /**
         * @description Metodo que permite validar el formulario y crear o actulizar un comic
         */
        // public crearPersona() : void {
            
        //     this.submitted = true;
        //     if (this.gestionarPersonasForm.invalid) {
        //         return;
        //     }  
        //     this.personas = new PersonasDTO();
        //     //this.personas.per_num_dcto = this.gestionarPersonasForm.controls.per_num_dcto.value;
        //     this.personas.per_tipo_dcto = this.gestionarPersonasForm.controls.per_tipo_dcto.value;
        //     this.personas.per_nombre = this.gestionarPersonasForm.controls.per_nombre.value;
        //     this.personas.per_fecha_nac = this.gestionarPersonasForm.controls.per_fecha_nac.value;
    
        //     console.log(this.personas);
    
        //     this.gestionarPersonasService.crearPersona(this.personas).subscribe(resultado => {
        //             //this.mostrarMensaje = true
        //             //this.mensajeExito = resultado.mensajeEjecucion;
        //             // if (resultado.exitoso){
        //                 this.limpiarFormulario();
        //                 this.consultarPersonas();
        //                 //this.mostrarMensaje = true;
        //             // }
        //         }, error => {
        //             console.log("Se he presentado un error al consumir el servicio de consultarPersonas(): ")
        //         })
    

          
            
    
        // }
    
          
        /**
        //  * Metodo que permite consultar un comic de la tabla y sus detalles 
        //  * @param posicion en la lista del comic seleccionado
        //  */
       
    
        //  /**
        // //  * Metodo que permite la eliminación un comic de la tabla y sus detalles
        // //  * @param idComicAEliminar en la lista del comic seleccionado
        // //  */
     
    
        //  /**
        //  * @description Metodo que limpia los controles del formulario
        //  */
        // private limpiarFormulario() : void {
        //     this.submitted = false;
        //     this.gestionarPersonasForm.controls.per_num_dcto.setValue(null);
        //     this.gestionarPersonasForm.controls.per_tipo_dcto.setValue(null);
        //     this.gestionarPersonasForm.controls.per_nombre.setValue(null);
        //     this.gestionarPersonasForm.controls.per_fecha_nac.setValue(null);
        // }
    
        // // /**
        //  * @description Metodo que obtiene los controles y sus propiedades
        //  * @author Diego Fernando Alvarez Silva
        //  */
        // get f() { 
        //     return this.gestionarPersonasForm.controls;
        // }
    
        // /**
        //  * @description Método que nos enruta hacia un nuevo componente para consultar el comic 
        //  */
        // // public navegarConsultarComic(posicion : number): void {
        // //     // variable que almacena el comic según la posición
        // //    let comic = this.listaComics[posicion];
        // //    // nos redireccionamos a la tura consultar comic enviando como parametro el comic seleccionado
        // //    this.router.navigate(['consultar-comic', comic]);       
    
        // //   }
    
    }