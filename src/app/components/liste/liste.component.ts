import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {
  pageName = 'Mes Listes';
  icon = '<i class="fas fa-list-ul"></i>';
  constructor() { }

  ngOnInit() {
  }

}
