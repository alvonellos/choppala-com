;import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private _http: HttpClient) { }

  public post(form: any) {
    return this._http.post(`http://contact.home.alvonellos.com/api/contact?name=` + form.name + `&email=` + form.email + `&phone=` + form.phone + `&message=` + form.message, '');
  }
}
