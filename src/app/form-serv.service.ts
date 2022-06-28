import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormServService {

  constructor() { }

  getuSerEmail(){
    return [EmailValidator]
  }
}
