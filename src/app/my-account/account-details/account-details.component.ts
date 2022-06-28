import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForbiddenEmailValidator } from '../../Validations/email.validator';
import { ForbiddenPasswordValidator } from '../../Validations/passward.validator';
import { ConfirmPasswordValidator } from '../../Validations/conframPassword.validator';


@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  regestrationLogInForm=this.fb.group({
    "firstName":['',[Validators.required]],
    "lastName":['',[Validators.required]],
    "email":['',[Validators.required]],
    "password":['',[Validators.required]],
    "confirmPassword":['',[Validators.required]],
    "check":['']
  },{validator:[ConfirmPasswordValidator]})

  User={
    "firstName":"",
    "lastName":"",
    "nameShow":"",
    "email":"",
    "password":"",
    "confirmPassword":"",
    "check":""
  }
  

  

  
  ngOnInit(): void {

    var newUser = localStorage.getItem("User") || ""
    this.User =JSON.parse(newUser)
    
  }

  

  @ViewChild('firstName') firstNameVAL! : ElementRef;
  @ViewChild('lastName') lastNameVAL! : ElementRef;
  @ViewChild('nameShow') nameShowVAL! : ElementRef;
  @ViewChild('email') emailVAL! : ElementRef;
  @ViewChild('password') passwordlVAL! : ElementRef;
  @ViewChild('confirmPassword') confirmPasswordVAL! : ElementRef;
  @ViewChild('check') checkVAL! : ElementRef;
  value:string='';
  
  ngAfterViewInit(): void {
    this.value = this.firstNameVAL.nativeElement.value
    this.value = this.lastNameVAL.nativeElement.value
    this.value = this.emailVAL.nativeElement.value
    this.value = this.passwordlVAL.nativeElement.value
    this.value = this.confirmPasswordVAL.nativeElement.value
    this.value = this.checkVAL.nativeElement.value
    this.value = this.nameShowVAL.nativeElement.value
  }
  
  onSubmit()
  {
    this.value = this.firstNameVAL.nativeElement.value
    console.log(this.value)
    this.User.firstName=this.value
    localStorage.setItem("User", JSON.stringify(this.User))

    var first = this.regestrationLogInForm.get('firstName')?.value;
    user: {fName:first}

    // ///////////////////////////////////////

    this.value = this.lastNameVAL.nativeElement.value
    console.log(this.value)
    this.User.lastName=this.value
    localStorage.setItem("User", JSON.stringify(this.User))

    var last = this.regestrationLogInForm.get('lastName')?.value;
    user: {lasName:last}

        // //////////////////////////////////
        this.value = this.nameShowVAL.nativeElement.value
        console.log(this.value)
        this.User.nameShow=this.value
        localStorage.setItem("User", JSON.stringify(this.User))
    
        var nameShow = this.regestrationLogInForm.get('nameShow')?.value;
         {nameShow:nameShow}
    
    // //////////////////////////////////////////////

    

    this.value = this.emailVAL.nativeElement.value
    console.log(this.value)
    this.User.email=this.value
    localStorage.setItem("User", JSON.stringify(this.User))

    var email = this.regestrationLogInForm.get('email')?.value;
    user: {email:email}

    // /////////////////////////////////////
    this.value = this.passwordlVAL.nativeElement.value
    console.log(this.value)
    this.User.password=this.value
    localStorage.setItem("User", JSON.stringify(this.User))

    var pass = this.regestrationLogInForm.get('posssword')?.value;
    user: {password:pass}

    //////////////////////////////////

    this.value = this.confirmPasswordVAL.nativeElement.value
    console.log(this.value)
    this.User.confirmPassword=this.value
    localStorage.setItem("User", JSON.stringify(this.User))

    var confirmPassword = this.regestrationLogInForm.get('confirmPassword')?.value;
    user: {confirmPassword:confirmPassword}

    // ///////////////////////

    this.value = this.checkVAL.nativeElement.value
    console.log(this.value)
    this.User.check=this.value
    localStorage.setItem("User", JSON.stringify(this.User))

    var check = this.regestrationLogInForm.get('check')?.value;
    user: {check:check}




  }


  get firstNameFeld(){
    return this.regestrationLogInForm.get('firstName')
  }

  get lastNameFeld(){
    return this.regestrationLogInForm.get('lastName')
  }
  get emailFeld(){
    return this.regestrationLogInForm.get('email')
  }

}
