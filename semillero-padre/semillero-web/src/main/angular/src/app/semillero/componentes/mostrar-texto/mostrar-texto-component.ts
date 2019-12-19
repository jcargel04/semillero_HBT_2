import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { element } from 'protractor';

@Component({
    selector: 'mostrar-texto',
    templateUrl: './mostrar-texto-component.html'
})

export class MostrarMensaje implements OnInit{

    /**
    * Variable que controla el nombre de la persona a mostrar.
    */
    public nombre: string;
 
    /**
     * Variable que controla la ciudad de la persona a mostrar.
    */
    public ciudad: string;

    /**
     * Variable que controla el mensaje final a mostrar luego de la unión de la variable nombre y ciudad.
    */
    public mensaje: string;


    /**
    * Variable global con que vamos a almacenar el array inicial de los comics.
    */
    public listaComic: Array<any>;

    /**
    * Variable global con que vamos a imprimir el listado del objeto comic en formato JSON .
    */
    public listaComicFinal: string;

    /**
    * Variable global que almacena el elemento del objeto comic seleccionado para eliminar.
    */
    public comicSeleccionado: Array<any>;

    /**
    * Variable global que almacena el nombre del comic eliminado.
    */
    public nombreDelComicEliminado : string;

    /**
    * Variable de verdad que controla si se ejecuta la eliminación o no de un elemento del objeto comic 
    */
    public fueEliminado : boolean;

    /**
    * Variable de verdad que controla si se ejecuta por primera vez la aplicación y así no mostrar el div de control de errores a primera instancia.
    */
    public primeraEjecucion : boolean;
    


    constructor(){
        /**
        * Mostramos un mensaje de control por consola.
        */
        console.log("Componente de mensaje Creado!, desplegándose en pantalla principal");
    }

    ngOnInit() : void {

        // Asignamos valor a la variable nombrePersona
        let nombrePersona : string = 'Juan Carlos';

        // Asignamos valor a la variable numeroValor que controla el año a mostrar
        let numeroValor : number = 2019;

        
        // Asignamos valor a la variable nombre
        this.nombre = "Juan Carlos Argel";

        // Asignamos valor a la variable ciudad
        this.ciudad = "Montería";

        // Asignamos valor a la variable mensaje como resultado de la concadenación de nombre y ciudad.
        this.mensaje = this.nombre + " - " + this.ciudad;


        // Creamos el objeto Comic con sus atributos
        class Comics {
            id: number;
            nombre: string;
            editorial: string;
            tematica: string;
            numeroPaginas: number;
            precio: number;
            autores: string;
            aColor: boolean;
            fechaVenta: Date;
            estado: string;
        };

        // Creamos el nuevo objeto local comic1 con sus respectivos varores, instanciado el objeto Comic.
        let comic1 = new Comics;
        comic1 = 
        {
            id: 1,
            nombre: "SUPERMAN",
            editorial: "MARVEL",
            tematica: "SUPERHEROES",
            numeroPaginas: 37,
            precio: 180000,
            autores: "PEDRO PÉREZ",
            aColor: true,
            fechaVenta: new Date("10/12/2019"),
            estado: "ACTIVO"
        };

        // Creamos el nuevo objeto local comic2 con sus respectivos varores, instanciado el objeto Comic.
        let comic2 = new Comics;
        comic2 = 
        {
            id: 2,
            nombre: "BATMAN",
            editorial: "DC COMIC",
            tematica: "SUPERHEROES",
            numeroPaginas: 40,
            precio: 170000,
            autores: "ANA ARANGO",
            aColor: false,
            fechaVenta: new Date("11/10/2019"),
            estado: "INACTIVO"
        };

        // Creamos el nuevo objeto local comic3 con sus respectivos varores, instanciado el objeto Comic.
        let comic3 = new Comics;
        comic3 = 
        {
            id: 3,
            nombre: "DRAGON BALL SUPER",
            editorial: "TOI ANIMATION",
            tematica: "ANIME",
            numeroPaginas: 120,
            precio: 300000,
            autores: "AKIRA TORIYAMA",
            aColor: true,
            fechaVenta: new Date("20/08/2019"),
            estado: "ACTIVO"
        };

        // Creamos el nuevo objeto local comic4 con sus respectivos varores, instanciado el objeto Comic.
        let comic4 = new Comics;
        comic4 = 
        {
            id: 4,
            nombre: "SAINT SEIYA",
            editorial: "Shūeisha",
            tematica: "ANIME",
            numeroPaginas: 90,
            precio: 250000,
            autores: "Masami Kurumada",
            aColor: true,
            fechaVenta: new Date("08/03/2019"),
            estado: "INACTIVO"
        };
        
        // Creamos el nuevo objeto local comic5 con sus respectivos varores, instanciado el objeto Comic.
        let comic5 = new Comics;
        comic5 = 
        {
            id: 5,
            nombre: "CAPTAIN TSUBASA",
            editorial: "Shūeisha",
            tematica: "ANIME",
            numeroPaginas: 95,
            precio: 270000,
            autores: "Yōichi Takahashi",
            aColor: true,
            fechaVenta: new Date("15/02/2019"),
            estado: "ACTIVO"
        };


        // Inicializamos el objeto listaComic como tipo array
        this.listaComic = new Array<any>();

        // LLenamos el array listaComic con cada uno de los objetos comic creados  
        this.listaComic.push(comic1, comic2, comic3, comic4, comic5);

        // Asignamos a la variable listaComicFinal el valor del array con los comics en formato JSON.
        this.listaComicFinal = JSON.stringify(this.listaComic);      
        
        // Asignamos el valor por defecto false a la variable de control de eliminación.
        this.fueEliminado = false;

        // Asignamos el valor por defecto true a la variable que controla si la aplicación se ejecuta por primara vez.
        this.primeraEjecucion = true;

        // Asignamos el valor por defecto vacio a la variable de control del nombre del comic eliminado.
        this.nombreDelComicEliminado = "";
    }
 
    
    /**
    * Generamos la funcionalidad del evento CLICK del botón Eliminar Comic, que recibe por defecto el número 3 como parámetro a eliminar según la posición del array comic.
    */
    public EventoClickEliminarComic(idComicAEliminar : number ) : void {
    
        // Extraemos el elemento que se va a eliminar según la posición número 3 del array que lo contiene
        this.comicSeleccionado = this.listaComic.slice(idComicAEliminar, idComicAEliminar + 1);

        // Manejamos un control de errores si no existe la posición 3 en el array para su eliminación asignandole false a la variable de control.
        if (this.comicSeleccionado[0] == undefined){
            this.fueEliminado = false
        }

        // Extraemos el nombre del comic a eliminar
        this.nombreDelComicEliminado = this.comicSeleccionado[0].nombre;

        // Mostramos el nombre del comic a eliminar por consola.
        console.log(this.nombreDelComicEliminado);

        try {
            // Eliminamos el comic según el la posición número 3 en el array
            this.listaComic.splice(idComicAEliminar, 1);
            
            // Asignamos en verdadero la variable que indentifica que el elemento fue eliminado.
            this.fueEliminado = true;

            // Asignamos en falso la variable que controla si la aplicación es ejecutada por primera vez.
            this.primeraEjecucion = false;

            // Mostramos por consola el array comic resultande de la eliminación.
            console.log(this.listaComic);
        } catch (error) {
            this.fueEliminado = true;
            // En caso de error mostrar el detalle del mismo por consola.
            console.log("No se pudo eliminar el comic seleccionado, para más detalle favor revisar... " + error);
        }
        
       
    }

       




}
    