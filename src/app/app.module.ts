import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppRoutingModule } from './app-routing-module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';
import { VisorFotoComponent } from './components//visor-foto/visor-foto.component';

//Service
import { DataService } from './services/data-service';
import { ListarFotosComponent } from './components/listar-fotos/listar-fotos.component';



@NgModule({
  declarations: [
    AppComponent,
    VisorFotoComponent,
    ListarFotosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgxPaginationModule,
    AngularFontAwesomeModule,
    AppRoutingModule
    // HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
