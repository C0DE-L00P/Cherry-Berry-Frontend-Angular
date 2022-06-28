import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.scss']
})
export class ShippingAddressComponent implements OnInit {

  constructor(private fb:FormBuilder) { }
  regestrationLogInForm=this.fb.group({
    firstName:['',[Validators.required]],
    lastName:['',[Validators.required]],
    email:['',[Validators.required]],
    phoneNumber:['',[Validators.required]],
    stratAdress:['',[Validators.required]],
    country:['',[Validators.required]],
    city:['',[Validators.required]]
  })


  get firstNameFeld(){
    return this.regestrationLogInForm.get('firstName')
  }

  get lastNameFeld(){
    return this.regestrationLogInForm.get('lastName')
  }

  get phoneNumberFeld(){
    return this.regestrationLogInForm.get('phoneNumber')
  }

  get stratAdressFeld(){
    return this.regestrationLogInForm.get('stratAdress')
  }

  get countryFeld(){
    return this.regestrationLogInForm.get('country')
  }

  get cityFeld(){
    return this.regestrationLogInForm.get('city')
  }


  ngOnInit(): void {
  }

}
