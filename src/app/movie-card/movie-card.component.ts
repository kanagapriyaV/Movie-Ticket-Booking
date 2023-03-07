import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Observable,map } from 'rxjs';
import { AppService } from '../app.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  title = 'Welcome to Movie Ticket Booking App';
  movies: any[]=[];
  theatres: any[] = [];
  imageToShow: any;
  constructor(private appService: AppService, private router: Router,public httpClient: HttpClient) { }

  ngOnInit(): void {
    this.appService.getAllMovies().subscribe((resp: any) => {
      this.movies = resp.movies;
      this.theatres = resp.theatre
      console.log(resp);
    })
  }
  navigateToTheatres(theatre: any) {
    const navigationExtras: NavigationExtras = {
      state: {
        customData: theatre,
        customMovie: this.movies
      }
    };

    this.router.navigateByUrl('/movie-theatre',navigationExtras);
  }
  getImage(imageUrl: string): Observable<Blob> {
    return this.httpClient.get(imageUrl, { responseType: 'blob' });
  }

createImageFromBlob(image: Blob) {
   let reader = new FileReader(); //you need file reader for read blob data to base64 image data.
   reader.addEventListener("load", () => {
      this.imageToShow = reader.result; // here is the result you got from reader
   }, false);

   if (image) {
      reader.readAsDataURL(image);
   }
  }
  getImageFromService(imageUrl: string) {
    this.getImage(imageUrl).subscribe(data => {
      this.createImageFromBlob(data);
    }, error => {
      console.log(error);
    });
}
}
