import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  MongoEndPoint: string = 'https://data.mongodb-api.com/app/<DATA API APP ID>/endpoint/data/v1/action/'
  //'https://ap-south-1.aws.data.mongodb-api.com/app/data-hxhfp/endpoint/data/v1/action/';
  constructor(private http: HttpClient) { }

  postData(data: any, url: string) {
    return this.http.post(url, data);
  }
  getData(url: string) {
    return this.http.get(url);
  }
  postMongoDB(collection:string,data:object):Observable<object>{
    const url = this.MongoEndPoint + 'insertOne';
    const postdata = {
      "collection":collection,
      "database": "Atlas",
      "dataSource":"Cluster0",
    "document": data
    }
    return this.http.post(url,postdata,{
      headers: {
        'api-key':'Wn5nrT2kOZhiF5rsAIQH6fkdHA6aGj32Hj2tuOH6twMl3BC7WGpNT1FKCzD8tKVO'
      }
    });
  }
}
