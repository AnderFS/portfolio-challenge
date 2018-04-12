import { Component, OnInit } from '@angular/core';
import { Photos } from '../../models/photos';
import { PaginationInstance } from "../../../../node_modules/ngx-pagination/dist/pagination-instance";
import { Router, NavigationExtras, ParamMap } from '@angular/router';

import * as $ from 'jquery';

//Service
import { DataService } from '../../services/data-service';

@Component({
  selector: 'app-listar-fotos',
  templateUrl: './listar-fotos.component.html',
  styleUrls: ['./listar-fotos.component.sass'],
  providers: [DataService]
})

export class ListarFotosComponent implements OnInit {

  constructor(private dataService: DataService,
    public router: Router) {
  }

  public allPhotos: Photos[] = [];
  public foundPhotos: Photos[] = [];
  public searchKey: string = "";
  public itemsPerPage: number[] = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  public selectedItemsPerPage: number = 10;
  public noData: boolean = false;

  public config: PaginationInstance = {
    id: 'advanced',
    itemsPerPage: 10,
    currentPage: 1
  };

  public ngOnInit() {
    this.getPhotos();
  }

  public searchPhotos() {
    this.noData = false;
    
    this.foundPhotos = this.allPhotos.filter(p => {
      let result =
        (this.searchKey === "" || p.title.toLowerCase().indexOf(this.searchKey.toLowerCase()) !== -1)//Search filter
        || (this.searchKey === "" || p.id.toString() == this.searchKey)
      // || (this.selectedType == d.Type) 
      //console.log(JSON.stringify(this.DWCatalogsForTable));
      //console.log(d.Status);
      // console.log("RESULT: " + result);
      return result;
    });

    if(this.foundPhotos.length == 0)
      this.noData = true;

    console.log(this.foundPhotos.length);
    // console.log(JSON.stringify(this.foundPhotos));
  }

  public getPhotos() {
    this.dataService.getPhotos()
      .subscribe(data => {
        if (data != null || data != undefined) {
          this.allPhotos = data;
          this.foundPhotos = this.allPhotos;
          // this.filterPhotosPerPage();
        }
        // console.log(this.allPhotos);
        console.log("LENGTH: " + this.allPhotos.length);
      });
  }

  public onPageChange(number: number) {
    console.log('change to page', number);
    this.config.currentPage = number;
  }

  public changeItemsPerPage(number: number) {
    // this.config.itemsPerPage = number;
  }

  public showPhoto(photoId){
    let selectedPhoto = this.allPhotos.find(ph => ph.id == photoId);
    
    if(selectedPhoto == undefined || selectedPhoto == null){
      console.log("There is no photo selected!");
      return;
    }
      
    console.log("Selected photo: " + selectedPhoto.id);  


    let navigationExtras: NavigationExtras = {
      queryParams: {
          "id": selectedPhoto.id,
          "albumId": selectedPhoto.albumId,
          "thumbnailUlr": selectedPhoto.thumbnailUlr,
          "title": selectedPhoto.title,
          "url": selectedPhoto.url,
      }
  };

    this.router.navigate(['/show-photo'], navigationExtras);
  }

}