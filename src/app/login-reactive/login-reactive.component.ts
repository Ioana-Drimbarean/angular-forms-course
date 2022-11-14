import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';
import { createPasswordStrengthValidator } from '../validators/password-strength.validator';

@Component({
  selector: 'login',
  templateUrl: './login-reactive.component.html',
  styleUrls: ['./login-reactive.component.css'],
})
export class LoginReactiveComponent implements OnInit {
  /*
  form = new FormGroup({
    email: new FormControl('test1234@test.com'', {
      validators: [Validators.required, Validators.email],
      updateOn: 'blur',
    }),
    password: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(8),
        createPasswordStrengthValidator(),
      ]
    }),
  }); */

  // Do not apply the FormGroup, because you'll loose the type of the form (type inference information), since FormGroup is of type any
  //form : FormGroup= this.fb.group({
  form = this.fb.group({
    email: [
      '', // default/initial value with type string | null when using FormBuilder and not NonNullableFormBuilder
      /*
      this.fb.nonNullable.control('', {
        validators: [Validators.required, Validators.email],
        updateOn: 'blur',
      }) => here the email is reseted to the initial value '' and not null */
      {
        validators: [Validators.required, Validators.email],
        updateOn: 'blur',
      },
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        createPasswordStrengthValidator(),
      ],
    ],
  });

  //constructor(private fb: FormBuilder) {}
  // NonNullableFormBuilder all fields are not nullable
  constructor(private fb: NonNullableFormBuilder) {}

  ngOnInit() {}

  get email() {
    return this.form.controls['email'];
  }

  get password() {
    return this.form.controls['password'];
  }

  login() {}

  reset() {
    this.form.reset();

    console.log(this.form.value);
  }
}
