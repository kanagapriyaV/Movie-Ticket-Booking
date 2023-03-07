import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookSeatsComponent } from './book-seats/book-seats.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieTheatreComponent } from './movie-theatre/movie-theatre.component';

const routes: Routes = [
  { path: 'theatres', component: MovieCardComponent },
  { path: 'movie-theatre', component: MovieTheatreComponent },
  { path: 'book-seats',component: BookSeatsComponent},
	{ path: '', component: MovieCardComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
