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
      return result;
    });

    if (this.foundPhotos.length == 0)
      this.noData = true;
  }

  public getPhotos() {
    this.dataService.getPhotos()
      .subscribe(data => {
        if (data != null || data != undefined) {
          this.allPhotos = data;
          this.foundPhotos = this.allPhotos;
        }
      });
  }

  public onPageChange(number: number) {
    this.config.currentPage = number;
  }

  public changeItemsPerPage(number: number) {
    // this.config.itemsPerPage = number;
  }

  public showPhoto(photoId) {
    let selectedPhoto = this.allPhotos.find(ph => ph.id == photoId);

    if (selectedPhoto == undefined || selectedPhoto == null) {
      return;
    }

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