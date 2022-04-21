import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class RestoService {
  url = 'http://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get(this.url);
  }
  saveResto(data: any) {
    // console.warn(data);
    return this.http.post(this.url, data);
  }
}
