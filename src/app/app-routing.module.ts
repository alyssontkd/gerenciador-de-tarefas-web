import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TarefaRoutes} from "./modules";

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/tarefas/listar-tarefa',
    pathMatch: 'full'
  },
  ...TarefaRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
