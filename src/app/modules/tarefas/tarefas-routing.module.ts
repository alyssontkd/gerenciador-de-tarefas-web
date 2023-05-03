import {Routes} from '@angular/router';
import {ListarTarefaComponent} from "./components/listar-tarefa";

export const TarefaRoutes: Routes = [
  {
    path: 'tarefas',
    redirectTo: 'tarefas/listar-tarefa'
  },
  {
    path: 'tarefas/listar-tarefa',
    component: ListarTarefaComponent
  }
];
