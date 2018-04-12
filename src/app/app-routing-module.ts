import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisorFotoComponent } from './components//visor-foto/visor-foto.component';
import { ListarFotosComponent } from './components/listar-fotos/listar-fotos.component';

const routes: Routes = [
    { path: 'show-photo', component: VisorFotoComponent },
    { path: '**', redirectTo: 'list-photos',  pathMatch: 'full' },
    { path: 'list-photos', component: ListarFotosComponent },
   ];

@NgModule({
  imports: [RouterModule.forRoot(
                        routes
                        //,{ enableTracing: true } 
                      )],
  exports: [RouterModule]
})
export class AppRoutingModule { }