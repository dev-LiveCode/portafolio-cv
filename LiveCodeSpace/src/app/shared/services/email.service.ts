import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IEmail } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  public httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*'
    })
  };

  constructor(private http: HttpClient) { }

  sendEmail(body: IEmail){
    return this.http.post<any>('https://xf2t0xll7a.execute-api.us-east-2.amazonaws.com/sendEmailPLCS', body, this.httpOptions)
  }
}
