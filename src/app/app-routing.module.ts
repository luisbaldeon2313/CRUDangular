import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEditarComponenteComponent } from './components/agregar-editar-componente/agregar-editar-componente.component';
import { ListComentariosComponent } from './components/list-comentarios/list-comentarios.component';
import { VerComentariosComponent } from './components/ver-comentarios/ver-comentarios.component';

const routes: Routes = [
  {path:'',component:ListComentariosComponent},
  {path:'agregar',component:AgregarEditarComponenteComponent},
  {path:'editar/:id',component:AgregarEditarComponenteComponent},
  {path:'ver/:id',component:VerComentariosComponent},
  {path:'*',redirectTo:'/',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
