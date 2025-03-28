import { ContactService } from './../service/contact/contact.service';
import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Contact } from '../models/contact.model';
import { RouterOutlet } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'contactly.web';

  contactsForm = new FormGroup({
    name: new FormControl<string>(''),
    email: new FormControl<string | null>(null),
    phone: new FormControl<string>(''),
    favorite: new FormControl<boolean>(false),
  });

  contacts$: Contact[] = [];

  constructor(private contactService: ContactService) {}

  async ngOnInit() {
    this.contacts$ = await firstValueFrom(this.contactService.getContacts());
  }

  onFormSubmit() {
    const addContactRequest = {
      name: this.contactsForm.value.name,
      email: this.contactsForm.value.email,
      phone: this.contactsForm.value.phone,
      favorite: this.contactsForm.value.favorite,
    };

    this.contactService.postContact(addContactRequest);
  }

  onDelete(id: string) {
    this.contactService.deleteContact(id);
  }
}
