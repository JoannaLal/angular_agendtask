import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css']
})
export class EvenementComponent implements OnInit {
  pageName = 'Evenements';
  icon = '<i class="far fa-handshake"></i>';
  constructor() {


  }

  ngOnInit() {
  }

}
