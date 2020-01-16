import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sondage',
  templateUrl: './sondage.component.html',
  styleUrls: ['./sondage.component.css']
})
export class SondageComponent implements OnInit {
  pageName = 'Sondage';
  icon = '<i class="fas fa-poll-h"></i>'
  constructor() { }

  ngOnInit() {
  }

}
