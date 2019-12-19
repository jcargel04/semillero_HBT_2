import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'consultar-comic',
    templateUrl: './consultar-comic.html',
    styleUrls: ['./consultar-comic.css']
})

export class ConsultarComicComponent implements OnInit {

    private consultarComicForm : FormGroup;

    constructor(private fb : FormBuilder, private router : Router, private activatedRoute: ActivatedRoute ){

        this.consultarComicForm = this.fb.group({
            nombre : [null, Validators.required],
            editorial : [null],
            tematica : [null],
            coleccion : [null],
            numeroPaginas : [null],
            precio : [null],
            autores : [null],
            color : [null]
        })

    }

    ngOnInit(): void {

        // Atributo que recibe el objeto comic para ser asignado sus valores a los controles del formulario
        let datosComic = this.activatedRoute.snapshot.params;
    
        console.log("Objeto recibido:  " + JSON.stringify(datosComic));

        // Asignamos valores a los controles del formulario
        this.consultarComicForm.controls.nombre.setValue(datosComic.nombre);
        this.consultarComicForm.controls.editorial.setValue(datosComic.editorial);
        this.consultarComicForm.controls.tematica.setValue(datosComic.tematica);
        this.consultarComicForm.controls.coleccion.setValue(datosComic.coleccion);
        this.consultarComicForm.controls.numeroPaginas.setValue(datosComic.numeroPaginas);
        this.consultarComicForm.controls.precio.setValue(datosComic.precio);
        this.consultarComicForm.controls.autores.setValue(datosComic.autores);
        this.consultarComicForm.controls.color.setValue(datosComic.color);

    }


    
}
