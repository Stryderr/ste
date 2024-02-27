import { Component } from '@angular/core';
import { GenericForTestingService } from './services/generic-for-testing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Stephenson - Client :4200';
  messages = [];
  constructor(private service: GenericForTestingService){}

  ngOnInit(){
    this.service.getMessages().subscribe(res => {
      this.messages = res.json();
    });
  }
}
