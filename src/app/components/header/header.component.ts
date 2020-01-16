import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  pageName = 'Agenda Principal';
  url: string;
  page: string[];

  constructor() {}

    ngOnInit()
    {
      this.url = window.location.href;
      console.log(this.url );
      this.page = this.url.split('/');
      console.log(this.page[3]);

    }

}
