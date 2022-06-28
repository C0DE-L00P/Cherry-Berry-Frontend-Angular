import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForbiddenEmailValidator } from '../Validations/email.validator';
import { ForbiddenPasswordValidator } from '../Validations/passward.validator';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss']
})
export class LogOutComponent implements OnInit {

  constructor(private fb:FormBuilder, private router: Router) { }

  regestrationLogInForm=this.fb.group({
    email:['',[Validators.required,ForbiddenEmailValidator(/asdtf/)]],
    passward:['',[Validators.required,Validators.minLength(8),ForbiddenPasswordValidator(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])/)]],
    check:['']
  })

  ngOnInit(): void {
    if(localStorage.getItem('User') != null) this.router.navigate(['../myAccount'])
  }

  get passwordFeld(){
    return this.regestrationLogInForm.get('passward')
  }

  get emailFeld(){
    return this.regestrationLogInForm.get('email')
  }

  goToAccountManagement(){
    //Todo make a call to get data from API
    
    this.router.navigate(['../../myAccount'])  
  }
}