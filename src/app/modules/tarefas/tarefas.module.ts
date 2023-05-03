import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";


import {TarefaService} from "./service";
import { ListarTarefaComponent } from './components/listar-tarefa';
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {CheckboxModule} from "primeng/checkbox";

@NgModule({
  declarations: [
    ListarTarefaComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    CheckboxModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
