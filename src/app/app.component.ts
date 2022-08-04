import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'project-angular';
  chargePeople: any;
  apiUrl = 'https://swapi.dev/api/people/'

  constructor (private apiService:AppService) {

  }

  setPeople(){
    this.apiService.changePeople(this.apiUrl)
    .subscribe(
    person => this.chargePeople = person
    );
  }
 
}
