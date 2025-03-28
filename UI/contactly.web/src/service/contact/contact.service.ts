import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../../models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private http: HttpClient) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>('https://localhost:7017/api/Contacts');
  }

  postContact(contact: any) {
    return this.http
      .post<Contact>('https://localhost:7017/api/Contacts', contact)
      .subscribe({
        next: (value) => {
          console.log(value);
        },
        error: (e) => {
          console.log(e);
        },
      });
  }

  deleteContact(id: string) {
    this.http.delete(`https://localhost:7017/api/Contacts/${id}`).subscribe({
      next: (value) => {
        alert('Item deleted');
      },
    });
  }
}
