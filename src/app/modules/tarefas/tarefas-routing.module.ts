import {Routes} from '@angular/router';

import {CadastrarTarefaComponent} from './components/cadastrar-tarefa';
import {ListarTarefaComponent} from "./components/listar-tarefa";

export const TarefaRoutes: Routes = [
  {
    path: 'tarefas',
    redirectTo: 'tarefas/listar'
  },
  {
    path: 'tarefas/listar',
    component: ListarTarefaComponent
  },
  {
    path: 'tarefas/cadastrar',
    component: CadastrarTarefaComponent
  }
];
