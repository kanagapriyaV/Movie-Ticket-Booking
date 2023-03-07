import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private httpClient: HttpClient) { }
  body = {"user_mail_id": "kanagapriyar93@gmail.com"}

  getAllMovies() {
    let url = "https://zincubate.in/api/MovieTicketChecker?action=getAllDetails"
        return this.httpClient.post<any>(url,this.body)
  }
  bookSeats(body: any) {
    let url = "https://zincubate.in/api/MovieTicketChecker?action=bookSeats"
        return this.httpClient.post<any>(url,body)
  }

}
