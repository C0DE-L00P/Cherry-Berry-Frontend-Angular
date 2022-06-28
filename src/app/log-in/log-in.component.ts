import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForbiddenEmailValidator } from '../Validations/email.validator';
import { ForbiddenPasswordValidator } from '../Validations/passward.validator';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  regestrationLogInForm=this.fb.group({
    email:['',[Validators.required,ForbiddenEmailValidator(/asdtf/)]],
    passward:['',[Validators.required,Validators.minLength(8),ForbiddenPasswordValidator(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])/)]],
    check:['']
  })

  @ViewChild('email') emailVAL! : ElementRef;
  value:string='';
  ngOnInit(): void {
    // this.value = this.emailVAL.nativeElement.value
    // console.log(this.value)
   }
   ngAfterViewInit(): void {
    this.value = this.emailVAL.nativeElement.value
    console.log(this.value)
   }

  get passwordFeld(){
    return this.regestrationLogInForm.get('passward')
  }

  get emailFeld(){
    return this.regestrationLogInForm.get('email')
  }

}
