import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(
    private http: HttpClient
  ) { }

  getItems() {
    return this.http.get(`http://www.mocky.io/v2/5c8a31542e0000a214d64a72`);
  }
}
