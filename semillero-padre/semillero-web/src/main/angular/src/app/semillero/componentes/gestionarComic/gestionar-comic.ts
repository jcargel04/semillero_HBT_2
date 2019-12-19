
import { ComicDTO } from '../../dto/comic.dto';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GestionarComicService } from '../../services/gestionar-comics.service';

/**
 * @description Componenete gestionar comic, el cual contiene la logica CRUD
 * 
 * @author Diego Fernando Alvarez Silva <dalvarez@heinsohn.com.co>
 */
@Component({
    selector: 'gestionar-comic',
    templateUrl: './gestionar-comic.html',
    styleUrls: ['./gestionar-comic.css']
})
export class GestionarComicComponent implements OnInit {

    /**
     * Atributo que contiene los controles del formulario
     */
    public gestionarComicForm : FormGroup;

    /**
     * Atributo que contendra la informacion del comic
     */
    public comic: ComicDTO;

    /**
     * Atributo que contendra la lista de comics creados
     */
    public listaComics : Array<ComicDTO>;

    public idComic : number = 0;

    /**
     * Atributo que indica si se envio a validar el formulario
     */
    public submitted : boolean;

     /**
     * Atributo que indica si estamos editando el comic
     */
    public editando : boolean;
    
    /**
     * Atributo que indica la posición de comic seleccionado
     */
    public indicePosicion : number;
       /**
    * Variable global que almacena el elemento del objeto comic seleccionado para eliminar.
    */
    public comicSeleccionado: Array<any>;

    /**
     * Atributo que indica si el comic fue eliminado
     */
    public fueEliminado : boolean;

    /**
     * Atributo que almacena el comic a eliminar
     */
    public nombreDelComicEliminado : string;


    public mensajeExito : string;

    public mostrarMensaje : boolean;

    /**
     * @description Este es el constructor del componente GestionarComicComponent
     * @author Diego Fernando Alvarez Silva <dalvarez@heinsohn.com.co>
     */
    constructor(private fb : FormBuilder, 
        private router : Router, 
        private gestionarComicService : GestionarComicService ) {
        this.gestionarComicForm = this.fb.group({
            nombre : [null, Validators.required],
            editorial : [null],
            tematica : [null],
            coleccion : [null],
            numeroPaginas : [null],
            precio : [null],
            autores : [null],
            color : [null]
        });
    }

    /**
     * @description Evento angular que se ejecuta al invocar el componente
     * @author Diego Fernando Alvarez Silva <dalvarez@heinsohn.com.co>
     */
    ngOnInit(): void {
        console.log("Ingreso al evento oninit");
        this.comic = new ComicDTO();
        this.listaComics = new Array<ComicDTO>();
        this.editando == false;
        this.fueEliminado == false;
        this.nombreDelComicEliminado == "";
        this.consultarComics();
    }

    private consultarComics() : void {
        console.log("Ejecuto linea 97")
        this.gestionarComicService.consultarComics().subscribe(listaComics => {
            this.listaComics = listaComics
        }, error => {
            console.log("Se ha presentado un error al consumir el servicio de consultarComics: " + error);
        });
        console.log("Ejecuto linea 103")
    }

    /**
     * @description Metodo que permite validar el formulario y crear o actulizar un comic
     */
    public crearActualizarComic() : void {
        this.submitted = true;
        if (this.gestionarComicForm.invalid) {
            return;
        }

        this.comic = new ComicDTO();
        this.comic.nombre = this.gestionarComicForm.controls.nombre.value;
        this.comic.editorial = this.gestionarComicForm.controls.editorial.value;
        this.comic.tematica = this.gestionarComicForm.controls.tematica.value;
        this.comic.coleccion = this.gestionarComicForm.controls.coleccion.value;
        this.comic.numeroPaginas = this.gestionarComicForm.controls.numeroPaginas.value;
        this.comic.precio = this.gestionarComicForm.controls.precio.value;
        this.comic.autores = this.gestionarComicForm.controls.autores.value;
        this.comic.color = this.gestionarComicForm.controls.color.value;
        this.comic.cantidad = 5;

        this.gestionarComicService.crearComic(this.comic).subscribe(resultado => {
            this.mostrarMensaje = true
            this.mensajeExito = resultado.mensajeEjecucion;
            // if (resultado.exitoso){
                this.limpiarFormulario();
                this.consultarComics();
                this.mostrarMensaje = true;
            // }
        }, error => {
            console.log("Se he presentado un error al consumir el servicio de consultarComics(): ")
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
    public modificarComic(posicion : number) : void {
        let comic = this.listaComics[posicion];
        this.editando = true;
        this.indicePosicion = posicion;
        this.gestionarComicForm.controls.nombre.setValue(comic.nombre);
        this.gestionarComicForm.controls.editorial.setValue(comic.editorial);
        this.gestionarComicForm.controls.tematica.setValue(comic.tematica);
        this.gestionarComicForm.controls.coleccion.setValue(comic.coleccion);
        this.gestionarComicForm.controls.numeroPaginas.setValue(comic.numeroPaginas);
        this.gestionarComicForm.controls.precio.setValue(comic.precio);
        this.gestionarComicForm.controls.autores.setValue(comic.autores);
        this.gestionarComicForm.controls.color.setValue(comic.color);
        this.gestionarComicForm.controls.nombre.enable();
        this.gestionarComicForm.controls.editorial.enable();
        this.gestionarComicForm.controls.tematica.enable();
        this.gestionarComicForm.controls.coleccion.enable();
        this.gestionarComicForm.controls.numeroPaginas.enable();
        this.gestionarComicForm.controls.precio.enable();
        this.gestionarComicForm.controls.autores.enable();
        this.gestionarComicForm.controls.color.enable();

    }

     /**
     * Metodo que permite la eliminación un comic de la tabla y sus detalles
     * @param idComicAEliminar en la lista del comic seleccionado
     */
    public eliminarComic(idComicAEliminar : number) : void {
        
        try {
            // variable que almacena el comic según el indice del array
            let comic = this.listaComics[idComicAEliminar];
            this.comicSeleccionado = this.listaComics.slice(idComicAEliminar, idComicAEliminar + 1);
            // Eliminamos el comic según el la posición indicada en la tabla
            this.listaComics.splice(idComicAEliminar, 1);
            // almacenamos el nombre del comic para posteriormente mostrarlo en una alerta
            this.nombreDelComicEliminado = this.comicSeleccionado[0].nombre;
            // Asignamos en verdadero la variable que indentifica que el elemento fue eliminado.
            this.fueEliminado = true;
            console.log("El Comic " + this.comicSeleccionado[idComicAEliminar].nombre + " ha sido eliminado!");
        } catch (error) {
            console.log("Error al eliminar el Comic seleccionado!");
            // Asignamos en false la variable que indentifica que el elemento fue eliminado.
            this.fueEliminado = false;
        }
    }

     /**
     * @description Metodo que limpia los controles del formulario
     */
    private limpiarFormulario() : void {
        this.submitted = false;
        this.gestionarComicForm.controls.nombre.setValue(null);
        this.gestionarComicForm.controls.editorial.setValue(null);
        this.gestionarComicForm.controls.tematica.setValue(null);
        this.gestionarComicForm.controls.coleccion.setValue(null);
        this.gestionarComicForm.controls.numeroPaginas.setValue(null);
        this.gestionarComicForm.controls.precio.setValue(null);
        this.gestionarComicForm.controls.autores.setValue(null);
        this.gestionarComicForm.controls.color.setValue(null);
        this.fueEliminado = false;
    }

    /**
     * @description Metodo que obtiene los controles y sus propiedades
     * @author Diego Fernando Alvarez Silva
     */
    get f() { 
        return this.gestionarComicForm.controls;
    }

    /**
     * @description Método que nos enruta hacia un nuevo componente para consultar el comic 
     */
    public navegarConsultarComic(posicion : number): void {
        // variable que almacena el comic según la posición
       let comic = this.listaComics[posicion];
       // nos redireccionamos a la tura consultar comic enviando como parametro el comic seleccionado
       this.router.navigate(['consultar-comic', comic]);       

      }

}