import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
export declare class CustomValidator {
    static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn;
    static passwordMatchValidator(control: AbstractControl): void;
    static validateSsn(): ValidatorFn;
    static validateTelephone(): ValidatorFn;
}
