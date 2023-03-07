import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-movie-theatre',
  templateUrl: './movie-theatre.component.html',
  styleUrls: ['./movie-theatre.component.scss']
})
export class MovieTheatreComponent implements OnInit {
  theatre: any;
  movies: any[] = [];
  show1_movie_details: any;
  show2_movie_details: any;
  show3_movie_details: any;
  show4_movie_details: any;
  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.theatre = window.history.state.customData;
    this.movies = window.history.state.customMovie;
    this.show1_movie_details = this.movies.find((movie: any) => movie.movie_name == this.theatre.show1_movie);
    this.show2_movie_details = this.movies.find((movie: any) => movie.movie_name == this.theatre.show2_movie);
    this.show3_movie_details = this.movies.find((movie: any) => movie.movie_name == this.theatre.show3_movie);
    this.show4_movie_details = this.movies.find((movie: any) => movie.movie_name == this.theatre.show4_movie);
    console.log(this.theatre);
    console.log(this.movies);
  }

  navigateToBookSeats(movieName: string) {
    localStorage.setItem('movieTheatre',JSON.stringify(this.theatre));
    const url = this.router.serializeUrl(
      this.router.createUrlTree([`/book-seats`],)
    );

    window.open(url,'_blank', 'toolbar=0,location=0,menubar=0');
  }
}
