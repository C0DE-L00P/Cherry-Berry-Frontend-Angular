import { AbstractControl, FormControl } from "@angular/forms";

export function ForbiddenPasswordValidator(forbiddenPassward:RegExp)
{
    return(control:AbstractControl)=>{

        const forbidden =forbiddenPassward.test(control.value);
        return forbidden ? {'forbiddenPassward':{value:control.value}} :null;
        
    }
}