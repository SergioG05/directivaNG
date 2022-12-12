import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponenteDosComponent } from './componentes/componente-dos/componente-dos.component';
import { ComponenteUnoComponent } from './componentes/componente-uno/componente-uno.component';



const routes: Routes = [
{
  path: 'pagina1', component: ComponenteUnoComponent
},
{
  path: 'pagina2', component: ComponenteDosComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
