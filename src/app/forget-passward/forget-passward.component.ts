import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForbiddenEmailValidator } from '../Validations/email.validator';

@Component({
  selector: 'app-forget-passward',
  templateUrl: './forget-passward.component.html',
  styleUrls: ['./forget-passward.component.scss']
})
export class ForgetPasswardComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  regestrationLogInForm=this.fb.group({
    email:['',[Validators.required,ForbiddenEmailValidator(/asdtf/)]]
  })

  ngOnInit(): void {
  }
  get emailFeld(){
    return this.regestrationLogInForm.get('email')
  }

}
