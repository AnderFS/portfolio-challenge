import { Component} from '@angular/core';
import { Photos } from './models/photos';
import { PaginationInstance } from "../../node_modules/ngx-pagination/dist/pagination-instance";
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing-module';
import { Location } from '@angular/common';

import * as $ from 'jquery';

//Service
import { DataService } from './services/data-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [DataService]
})

export class AppComponent {

  constructor(
    private location: Location,
    public dataService: DataService,
    public router: Router
  ){
  }

  navigateBack(){
    this.location.back();
  }
}

