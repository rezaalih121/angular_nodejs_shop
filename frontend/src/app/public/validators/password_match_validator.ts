import { AbstractControl } from "@angular/forms"

export const PasswordsMatchValidator = (passwordControlName: string, conformPasswordControlName: string) => {
    const validator = (form: AbstractControl) => {
        const passwordControl = form.get(passwordControlName);
        const confirmPasswordControl = form.get(conformPasswordControlName);

        if (!passwordControl || !confirmPasswordControl) return;

        if (passwordControl.value !== confirmPasswordControl.value) {
            confirmPasswordControl.setErrors({ noMatch: true });
        } else {
            const errors = confirmPasswordControl.errors;
            if (!errors) return;

            delete errors.noMatch;
            confirmPasswordControl.setErrors(errors);
        }

    }
    return validator;
}