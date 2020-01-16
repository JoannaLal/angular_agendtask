import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repertoire',
  templateUrl: './repertoire.component.html',
  styleUrls: ['./repertoire.component.css']
})
export class RepertoireComponent implements OnInit {
  pageName = 'Repertoire';
  icon = '<i class="far fa-address-book"></i>';
  constructor() { }

  ngOnInit() {
  }

}
