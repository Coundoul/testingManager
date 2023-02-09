import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  sideBarOpen=true;

  title = 'application-testing-frontend';

  ngOnInit(): void {}

  sideBarToggle(){
    this.sideBarOpen=!this.sideBarOpen;
  }
}
