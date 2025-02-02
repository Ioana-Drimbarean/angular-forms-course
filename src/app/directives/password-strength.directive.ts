import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { createPasswordStrengthValidator } from '../validators/password-strength.validator';

@Directive({
  selector: '[passwordStrength]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordStrengthDirective,
      multi: true,
    },
  ],
})
export class PasswordStrengthDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    //createPasswordStrengthValidator() => creates the validator function
    return createPasswordStrengthValidator()(control); // get validation result
  }
}
