import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


import {TarefaService} from "./service";
import {ButtonModule} from "primeng/button";
import {TableModule} from "primeng/table";
import {CheckboxModule} from "primeng/checkbox";

import { ListarTarefaComponent } from './components/listar-tarefa';
import { CadastrarTarefaComponent } from './components/cadastrar-tarefa';
import {InputTextModule} from "primeng/inputtext";

@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    CheckboxModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule
  ],
  providers: [
    TarefaService
  ]
})
export class TarefasModule { }
