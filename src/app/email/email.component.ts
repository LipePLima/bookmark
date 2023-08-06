import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent {
  public _form: FormGroup;
  public _toggle: boolean = true;

  constructor(private formBuilder: FormBuilder) {
    this._form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i)]]
    });
  }

  public compareEmailWithRegex() {
    console.log(this._form.value.email)
    if (this._form.valid) {
      this._toggle = true;
    } else {
      this._toggle = false;
    }
  }
}
