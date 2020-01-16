import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.component.html',
  styleUrls: ['./parametre.component.css']
})
export class ParametreComponent implements OnInit {
  pageName = 'Parametres';
  icon = '<i class="fas fa-cog"></i>';
  constructor() { }

  ngOnInit() {
  }

}
