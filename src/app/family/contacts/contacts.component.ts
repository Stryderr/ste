import { Component, OnInit, HostListener, ElementRef  } from '@angular/core';
import { Contact } from 'src/app/shared/models/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [];
  selectedContact: Contact | null = null;
  constructor(private eRef: ElementRef) { }

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.closePopup();
    }
  }
  ngOnInit() {
    this.getContacts();
  }

  getContacts(): void {
    const johnDoeJr: Contact = {
      id: 1, name: 'John Doe Jr.', title: 'Son', description: 'Some description about John Doe Jr.', mother: null, father: null, children: [], siblings: [], address: { street: '123 Main St', city: 'Anytown', state: 'CA', zip: '12345' },
      phoneNumber: '',
      email: ''
    };
    const janeDoeJr: Contact = { id: 2, name: 'Jane Doe Jr.', title: 'Daughter', description: 'Some description about Jane Doe Jr.', mother: null, father: null, children: [], siblings: [johnDoeJr], address: { street: '123 Main St', city: 'Anytown', state: 'CA', zip: '12345' }, phoneNumber: '', email: '' };

    const johnDoe: Contact = { id: 3, name: 'John Doe', title: 'Father', description: 'Some description about John Doe', mother: null, father: null, children: [johnDoeJr, janeDoeJr], siblings: [], address: { street: '123 Main St', city: 'Anytown', state: 'CA', zip: '12345' }, phoneNumber: '', email: '' };
    const janeDoe: Contact = { id: 4, name: 'Jane Doe', title: 'Mother', description: 'Some description about Jane Doe', mother: null, father: null, children: [johnDoeJr, janeDoeJr], siblings: [], address: { street: '123 Main St', city: 'Anytown', state: 'CA', zip: '12345' }, phoneNumber: '', email: '' };

    johnDoeJr.mother = janeDoe;
    johnDoeJr.father = johnDoe;
    johnDoeJr.siblings = [janeDoeJr];
    janeDoeJr.mother = janeDoe;
    janeDoeJr.father = johnDoe;

    const contacts: Contact[] = [johnDoeJr, janeDoeJr, johnDoe, janeDoe];
    this.contacts = contacts;
  }

  selectContact(contact: Contact): void {
    this.selectedContact = contact;
  }

  closePopup(): void {
    this.selectedContact = null;
  }
}
