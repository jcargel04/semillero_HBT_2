import { Component, OnInit } from '@angular/core';
import { getLocaleDateFormat } from '@angular/common';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { GestionarPersonasService } from '../../services/gestionar-personas.service';
import { PersonasDTO } from '../../dto/personas.dto';

/**
 * @description La clase CrearPersonaComponent permite crear personas
 * @author Juan Carlos Argel
 */
@Component({
    selector: 'crear-persona',
    templateUrl: './crear-persona-component.html'
})


export class CrearPersonaComponent implements OnInit{
    
    public per_num_dcto : number = 0;
    public per_tipo_dcto : string;
    public per_nombre : string;
    public per_fecha_nac : Date;


        /**
         * Atributo que contiene los controles del formulario
         */
        public gestionarPersonasForm : FormGroup;
    
        /**
         * Atributo que contendra la informacion de la persona
         */
        public personas: PersonasDTO;
    
        /**
         * Atributo que contendra la lista de personas creadas
         */
        public listaPersonas : Array<PersonasDTO>;    
      
        /**
         * Atributo que indica la posición de la persona seleccionada
         */
        public indicePosicion : number;
           /**
          /**
        * Atributo que indica si se envio a validar el formulario
        */
        public submitted : boolean;
      
        /**
         * @description Este es el constructor del componente GestionarPersonasComponent
         * @author Juan Carlos Argel
         */
        constructor(private fb : FormBuilder, 
            private router : Router, 
            private gestionarPersonasService : GestionarPersonasService ) {
            this.gestionarPersonasForm = this.fb.group({
                per_num_dcto : [null],
                per_tipo_dcto : [null],
                per_nombre : [null],
                per_fecha_nac : [null]
            });
        }
    
        /**
         * @description Evento angular que se ejecuta al invocar el componente
         * @author Juan Carlos Argel
         */
        ngOnInit(): void {
            console.log("Ingreso al evento oninit");
            this.personas = new PersonasDTO();
            this.listaPersonas = new Array<PersonasDTO>();
            
            this.consultarPersonas();
        }
    


        private consultarPersonas() : void {

            this.gestionarPersonasService.consultarPersonas().subscribe(listaPersonas => {
                this.listaPersonas = listaPersonas
                console.log(JSON.stringify(this.listaPersonas));
            }, error => {
                console.log("Se ha presentado un error al consumir el servicio de consultarPersonas: " + error);
            });
        }
    
        
        /**
         * @description Metodo que permite validar el formulario y crear o actulizar un comic
         */
        public crearPersona() : void {
            
            this.submitted = true;
            if (this.gestionarPersonasForm.invalid) {
                return;
            }  
            this.personas = new PersonasDTO();
            //this.personas.per_num_dcto = this.gestionarPersonasForm.controls.per_num_dcto.value;
            this.personas.per_tipo_dcto = this.gestionarPersonasForm.controls.per_tipo_dcto.value;
            this.personas.per_nombre = this.gestionarPersonasForm.controls.per_nombre.value;
            this.personas.per_fecha_nac = this.gestionarPersonasForm.controls.per_fecha_nac.value;
    
            console.log(this.personas);
    
            this.gestionarPersonasService.crearPersona(this.personas).subscribe(resultado => {
                    //this.mostrarMensaje = true
                    //this.mensajeExito = resultado.mensajeEjecucion;
                    // if (resultado.exitoso){
                        this.limpiarFormulario();
                        this.consultarPersonas();
                        //this.mostrarMensaje = true;
                    // }
                }, error => {
                    console.log("Se he presentado un error al consumir el servicio de consultarPersonas(): ")
                })
    

          
            
    
    
            //this.listaComics.push(this.comic);
            
    
            // // validamos si estamos editando el registro, en caso de ser así actualizamos el registro con los nuevos valores del comic editado
            // if (this.editando == true){
            //     this.listaComics[this.indicePosicion].nombre = this.gestionarComicForm.controls.nombre.value;
            //     this.listaComics[this.indicePosicion].editorial = this.gestionarComicForm.controls.editorial.value;
            //     this.listaComics[this.indicePosicion].tematica = this.gestionarComicForm.controls.tematica.value;
            //     this.listaComics[this.indicePosicion].coleccion = this.gestionarComicForm.controls.coleccion.value;
            //     this.listaComics[this.indicePosicion].numeroPaginas = this.gestionarComicForm.controls.numeroPaginas.value;
            //     this.listaComics[this.indicePosicion].precio = this.gestionarComicForm.controls.precio.value;
            //     this.listaComics[this.indicePosicion].autores = this.gestionarComicForm.controls.autores.value;
            //     this.listaComics[this.indicePosicion].color = this.gestionarComicForm.controls.color.value;
            //     console.log(this.listaComics);
            //     // Limpiamos los controles del formulario
            //     this.limpiarFormulario();
    
    
            // }else{
    
            //     // Actualizamos a true la bandera que indica que estamos enviando un nuevo comic
            //     this.submitted = true;
            //     // Validamos que no existe algún problema de validación con el formulario
            //     if(this.gestionarComicForm.invalid) {
            //         return;
            //     }
            //     // Llenamos el objeto comic con los valores de los controles del formulario
            //     this.idComic++;
            //     this.comic = new ComicDTO();
            //     this.comic.id = this.idComic + "";
            //     this.comic.nombre = this.gestionarComicForm.controls.nombre.value;
            //     this.comic.editorial = this.gestionarComicForm.controls.editorial.value;
            //     this.comic.tematica = this.gestionarComicForm.controls.tematica.value;
            //     this.comic.coleccion = this.gestionarComicForm.controls.coleccion.value;
            //     this.comic.numeroPaginas = this.gestionarComicForm.controls.numeroPaginas.value;
            //     this.comic.precio = this.gestionarComicForm.controls.precio.value;
            //     this.comic.autores = this.gestionarComicForm.controls.autores.value;
            //     this.comic.color = this.gestionarComicForm.controls.color.value;
            //     // Ingresamos un nuevo registro de comic 
            //     this.listaComics.push (this.comic);
            //     // Limpiamos los controles del formulario
            //     this.limpiarFormulario();
    
    
            // }
            // // Asignamos en false la variable que indentifica que el elemento se esta editando.
            // this.editando = false;
    
        }
    
          
        /**
         * Metodo que permite consultar un comic de la tabla y sus detalles 
         * @param posicion en la lista del comic seleccionado
         */
        // public modificarComic(posicion : number) : void {
            
        //     this.idComicAEditar = Number(this.listaComics[posicion].id);
            
        //     let comic = this.listaComics[posicion];
        //     this.editando = true;
        //     this.indicePosicion = posicion;
        //     this.gestionarComicForm.controls.nombre.setValue(comic.nombre);
        //     this.gestionarComicForm.controls.editorial.setValue(comic.editorial);
        //     this.gestionarComicForm.controls.tematica.setValue(comic.tematica);
        //     this.gestionarComicForm.controls.coleccion.setValue(comic.coleccion);
        //     this.gestionarComicForm.controls.numeroPaginas.setValue(comic.numeroPaginas);
        //     this.gestionarComicForm.controls.precio.setValue(comic.precio);
        //     this.gestionarComicForm.controls.autores.setValue(comic.autores);
        //     this.gestionarComicForm.controls.color.setValue(comic.color);
        //     this.gestionarComicForm.controls.nombre.enable();
        //     this.gestionarComicForm.controls.editorial.enable();
        //     this.gestionarComicForm.controls.tematica.enable();
        //     this.gestionarComicForm.controls.coleccion.enable();
        //     this.gestionarComicForm.controls.numeroPaginas.enable();
        //     this.gestionarComicForm.controls.precio.enable();
        //     this.gestionarComicForm.controls.autores.enable();
        //     this.gestionarComicForm.controls.color.enable();
    
        // }
    
         /**
        //  * Metodo que permite la eliminación un comic de la tabla y sus detalles
        //  * @param idComicAEliminar en la lista del comic seleccionado
        //  */
        // public eliminarComic(posicion : number) : void {
            
        //     let idComicAEliminar = Number(this.listaComics[posicion].id);
    
        //     try {
        //         this.gestionarComicService.eliminarComic(idComicAEliminar).subscribe(resultado => {
        //             //this.mostrarMensaje = true
        //             //this.mensajeExito = resultado.mensajeEjecucion;
        //             // if (resultado.exitoso){
        //                this.limpiarFormulario();
        //                this.consultarComics();
        //             //    this.mostrarMensaje = true;
        //             // }
        //             console.log("El comic fue eliminado!")
        //         }, error => {
        //             console.log("Se he presentado un error al consumir el servicio de eliminarComics(): " + error)
        //         })    
        //     } catch (error) {
        //         console.log("Error en la función de eliminar, el comic no fue eliminado." + error)
        //     }
    
            
    
    
            // try {
            //     // variable que almacena el comic según el indice del array
            //     let comic = this.listaComics[idComicAEliminar];
            //     this.comicSeleccionado = this.listaComics.slice(idComicAEliminar, idComicAEliminar + 1);
            //     // Eliminamos el comic según el la posición indicada en la tabla
            //     this.listaComics.splice(idComicAEliminar, 1);
            //     // almacenamos el nombre del comic para posteriormente mostrarlo en una alerta
            //     this.nombreDelComicEliminado = this.comicSeleccionado[0].nombre;
            //     // Asignamos en verdadero la variable que indentifica que el elemento fue eliminado.
            //     this.fueEliminado = true;
            //     console.log("El Comic " + this.comicSeleccionado[idComicAEliminar].nombre + " ha sido eliminado!");
            // } catch (error) {
            //     console.log("Error al eliminar el Comic seleccionado!");
            //     // Asignamos en false la variable que indentifica que el elemento fue eliminado.
            //     this.fueEliminado = false;
            // }
    
    
        // }
    
         /**
         * @description Metodo que limpia los controles del formulario
         */
        private limpiarFormulario() : void {
            this.submitted = false;
            this.gestionarPersonasForm.controls.per_num_dcto.setValue(null);
            this.gestionarPersonasForm.controls.per_tipo_dcto.setValue(null);
            this.gestionarPersonasForm.controls.per_nombre.setValue(null);
            this.gestionarPersonasForm.controls.per_fecha_nac.setValue(null);
        }
    
        /**
         * @description Metodo que obtiene los controles y sus propiedades
         * @author Diego Fernando Alvarez Silva
         */
        get f() { 
            return this.gestionarPersonasForm.controls;
        }
    
        /**
         * @description Método que nos enruta hacia un nuevo componente para consultar el comic 
         */
        // public navegarConsultarComic(posicion : number): void {
        //     // variable que almacena el comic según la posición
        //    let comic = this.listaComics[posicion];
        //    // nos redireccionamos a la tura consultar comic enviando como parametro el comic seleccionado
        //    this.router.navigate(['consultar-comic', comic]);       
    
        //   }
    
    }