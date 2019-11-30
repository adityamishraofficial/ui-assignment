import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CurlService {
    env = environment;
  constructor(private http: HttpClient) { }

  getMethod(methodUrl) {
   return this.http.get(this.env.url + methodUrl)
    .toPromise()
    .then( res => {
        return res;
    }).catch( err => {
        return err;
    });
  }
}
