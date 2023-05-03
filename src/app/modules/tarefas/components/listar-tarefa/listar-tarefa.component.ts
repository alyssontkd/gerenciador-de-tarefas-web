import { Component,OnInit } from '@angular/core';

import{ TarefaService } from "../../service";
import {TarefaModel} from "../../models";

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.scss']
})
export class ListarTarefaComponent implements OnInit {

  tarefas: TarefaModel[]; //Este atributo é disponibilizado automaticamente na view
  constructor(private tarefaService: TarefaService) {}
  ngOnInit() {
    this.tarefas = this.listarTodos();
    this.tarefas = [
      new TarefaModel(1, "Tarefa 1", true),
      new TarefaModel(2, "Tarefa 2", false),
      new TarefaModel(3, "Tarefa 3", true),
      new TarefaModel(4, "Tarefa 4", false),
      new TarefaModel(5, "Tarefa 5", true),
      new TarefaModel(6, "Tarefa 6", false),
      new TarefaModel(7, "Tarefa 7", true),
      new TarefaModel(8, "Tarefa 8", false)
    ];
  }
  listarTodos(): TarefaModel[]{
    return this.tarefaService.listarTodos();
  }




}
