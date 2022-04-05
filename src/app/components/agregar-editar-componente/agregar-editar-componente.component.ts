import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Comentario } from 'src/app/interfaces/Comentario';

@Component({
  selector: 'app-agregar-editar-componente',
  templateUrl: './agregar-editar-componente.component.html',
  styleUrls: ['./agregar-editar-componente.component.css']
})
export class AgregarEditarComponenteComponent implements OnInit {
  agregarComentario: FormGroup;

  constructor(private fb:FormBuilder) {
    this.agregarComentario = this.fb.group({
      titulo:['',Validators.required],
      creador:['',Validators.required],
      texto:['',Validators.required],

    })
   }

  ngOnInit(): void {
  }
  agregar(){
    console.log(this.agregar);
    const comentario: Comentario = {
      titulo: this.agregarComentario.get('titulo')?.value,
      creador: this.agregarComentario.get('titulo')?.value,
      texto: this.agregarComentario.get('titulo')?.value,
      fechaCreacion: new Date
    }
    console.log(comentario);
    
  }

}
