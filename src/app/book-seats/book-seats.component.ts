import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-book-seats',
  templateUrl: './book-seats.component.html',
  styleUrls: ['./book-seats.component.scss']
})
export class BookSeatsComponent implements OnInit {
  rows: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  cols: number[]  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  reserved: string[] = [];
    selected: string[] = [];
    theatre: any;
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.theatre = window.history.state.customData;
  }
  seatClicked(seatNo: any) {
    this.selected.push(seatNo);
    console.log(this.selected);
  }
  getStatus(seatPos: string) {
    if(this.reserved.indexOf(seatPos) !== -1) {
        return 'reserved';
    } else if(this.selected.indexOf(seatPos) !== -1) {
        return 'selected';
    }
    return;
  }
  bookSeat() {
    this.theatre = JSON.parse(localStorage.getItem('movieTheatre') || '[]');
    let body = {
      "show_time": this.theatre.show1_time,
      "movie_name": this.theatre.show1_movie,
      "theatre_name": this.theatre.theatre_name,
      "booked_seats": this.selected,
      "date": "22/12/2022",
      "user_mail_id": "kanagapriyar93@gmail.com"
    }
    this.appService.bookSeats(body).subscribe((resp: any) => {
      console.log(resp);
    })
  }
}
