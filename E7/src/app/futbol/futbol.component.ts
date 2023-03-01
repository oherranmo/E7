import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-futbol',
  templateUrl: './futbol.component.html',
  styleUrls: ['./futbol.component.css']
})
export class FutbolComponent {
  data = "18/12/22";


  enviaData(){
  this.http.post<any>('http://localhost:3020/oscarherran/guanyador/1-3-23', {
    data: this.data,
  }).subscribe();
  }



  constructor(private http:HttpClient) {
    this.http.get<any>('http://localhost:3020/oscarherran/jugadors').subscribe((document)=>{
      console.log(document);
    });
  }
}
