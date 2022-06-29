import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../Services/users.service';
import { ForbiddenEmailValidator } from '../Validations/email.validator';
import { ForbiddenPasswordValidator } from '../Validations/passward.validator';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss'],
})
export class LogOutComponent implements OnInit {
  constructor(private fb: FormBuilder, private router: Router,private usersService:UsersService) {}

  regestrationLogInForm = this.fb.group({
    email: ['', [Validators.required, ForbiddenEmailValidator(/asdtf/)]],
    passward: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        ForbiddenPasswordValidator(
          /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])/
        ),
      ],
    ],
    check: [''],
  });

  ngOnInit(): void {
    if (localStorage.getItem('User') != null)
      this.router.navigate(['../myAccount']);
  }

  get passwordFeld() {
    return this.regestrationLogInForm.get('passward');
  }

  get emailFeld() {
    return this.regestrationLogInForm.get('email');
  }

  goToAccountManagement(email: any, pass: any) {
    //Todo make a call to get data from API

    // this.usersService.MakeALogin({Email: email,Password: pass}).subscribe((userData)=>{
    //   console.log(userData)
    // })

    localStorage.setItem('User', JSON.stringify({ Email: email, Password: pass ,FirstName: 'Mohamed', LastName: 'Gamal'}));
    this.router.navigate(['../../myAccount']);
  }
}
