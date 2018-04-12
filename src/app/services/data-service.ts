import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { Photos } from "../models/photos";

@Injectable()
export class DataService {

    private photosUrl = "https://jsonplaceholder.typicode.com/photos";
    private allPhotos: Photos[] = [];
    public selectedPhoto: Photos;

    constructor(private http: Http) {
    }

    // constructor(private httpClient: HttpClient){}

    public getPhotos(): Observable<Photos[]> {
        // return this.http
        //     .get(this.photosUrl)
        //     .map((response: Response) => {
        //         return <Photos[]>response.json();
        //     })
        //     .catch(this.handleError);

        return this.http.get(this.photosUrl)
            .map((response: Response) => response.json())
            .catch(this.handleError);
        // return this.httpClient.get<Photos[]>(this.photosUrl);
    }

    public showPhoto(selectedPhoto: Photos){
        this.selectedPhoto = selectedPhoto;
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}