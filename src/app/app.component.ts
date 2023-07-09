import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-keycloak';
  user:String = '';

  constructor(private testService: TestService){

  }
  ngOnInit(): void {
    this.testService.getUsers().subscribe((data: string) => {
      console.log(data);
      this.user = data;
    });
  }

}
