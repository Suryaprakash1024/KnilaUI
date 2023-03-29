import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  postData(data: any, url: string) {
    return this.http.post(url, data);
  }
  getData(url: string) {
    return this.http.get(url);
  }
}
