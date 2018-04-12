import { Component, OnInit } from '@angular/core';
import { Photos } from '../../models/photos';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

//Service
import { DataService } from '../../services/data-service';
import { PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-visor-foto',
  templateUrl: './visor-foto.component.html',
  styleUrls: ['./visor-foto.component.sass']
})
export class VisorFotoComponent implements OnInit  {

  constructor(private dataService: DataService, 
  private router: Router,
  private route: ActivatedRoute) { }

  public photo: Photos = null;

  ngOnInit() {
    this.photo = new Photos();
    this.route.queryParams.subscribe(params => {
          this.photo.id = params["id"];
          this.photo.albumId = params["albumId"];
          this.photo.title = params["title"];
          this.photo.url = params["url"];
          console.log(this.photo);
      });
    }

    public backToPhotos(){
      this.router.navigate(["/list-photos"]);
    }

}
