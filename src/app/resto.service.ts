import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class RestoService {
  url = 'http://jsonplaceholder.typicode.com/users';
  rootUrl = 'http://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get(this.url);
  }
  saveResto(data: any) {
    // console.warn(data);
    return this.http.post(this.url, data);
  }
  deleteResto(id: any) {
    return this.http.delete(`${this.url}/${id}`);
  }
  getCurrentResto(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }
  updateResto(id: any, data: any) {
    return this.http.put(`${this.url}/${id}`, data);
  }
  register(data: any) {
    // return this.http.post(this.rootUrl + 'users', data);
    return this.http.post(this.rootUrl, data);
  }
  loginResto(data: any) {
    return this.http.post(this.url, data);
  }
}
