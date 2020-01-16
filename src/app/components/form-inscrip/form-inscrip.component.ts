import { Component, OnInit } from '@angular/core';
import { AbstractControlDirective } from '@angular/forms';
import {User} from '../../classe/User';


@Component({
  selector: 'app-form-inscrip',
  templateUrl: './form-inscrip.component.html',
  styleUrls: ['./form-inscrip.component.css']
})
export class FormInscripComponent implements OnInit {
  user: User = new User();

  constructor() { }

  ngOnInit() {
  }
  public addUser(form: AbstractControlDirective): void {
    if (form.valid) {
      this.user = new User();
      form.reset();
    } else {

      form.control.markAllAsTouched();

    }
  }

}
