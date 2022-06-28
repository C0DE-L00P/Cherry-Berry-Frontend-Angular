import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  countries = ["مصر", "مدغشقر", "آيسلندا", "أثيوبيا", "أذربيجان", "إرتريا", "أرمينيا", "أروبا", "إسبانيا", "أستراليا", "استونيا", "إسواتيني", "أفغناستان", "الأراضي الفلسطينية", "الأرجنتين", "الأردن", "البحرين", "البرازيل", "البرتغال", "الجزائر", "السودان"];
  cities = ["الإسكندرية", "أسوان", "أسيوط", "البحيرة", "المنيا", "بني سويف", "البحر الاحمر", "المنصورة", "الجيزة", "القاهرة", "الاقصر", "قنا", "سوهاج", "دمياط", "مطروح", "الاقصر", "الفيوم", "الشرقية", "الغربية", "الدقهلية", "دمياط"];
  constructor(private fb:FormBuilder,private router: Router) { }
  cart:any[]=[]
  total:number=0
  quantity: number = 1;

  registerationForm = this.fb.group({
    fName: ['',[Validators.required]],
    lName: ['',[Validators.required]],
    email: ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    number: ['',[Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{11}$")]], 
    address: ['',[Validators.required]],    
    country: ['',[Validators.required]],    
    city: ['',[Validators.required]],
    region: ['',[Validators.required]],
    // validation of check out by visa
    creditID: ['',[Validators.required]],
    month: ['',[Validators.required]],
    year: ['',[Validators.required]],
    cvv: ['',[Validators.required]],
  })
  get fName()
  {
    return this.registerationForm.get('fName')
  }
  get lName()
  {
    return this.registerationForm.get('lName')
  }
  get email()
  {
    return this.registerationForm.get('email')
  }
  get number()
  {
    return this.registerationForm.get('number')
  }
  get address()
  {
    return this.registerationForm.get('address')
  }
  get country()
  {
    return this.registerationForm.get('country')
  }
  get city()
  {
    return this.registerationForm.get('city')
  }
  get region()
  {
    return this.registerationForm.get('region')
  }
    // validation of check out by visa
  get creditID()
  {
    return this.registerationForm.get('creditID')
  }
  get month()
  {
    return this.registerationForm.get('month')
  }
  get year()
  {
    return this.registerationForm.get('year')
  }
  get cvv()
  {
    return this.registerationForm.get('cvv')
  }

  isVisible: any;

  ngOnInit(): void {
    this.getproductcart()
  }

  Click(){
    // console.log('clicked');
    let order ={
      "ConsistOf": "kdkdkd",
      "Date": new Date(),
      "State":"pending",
      "UserInfo": "4444",
      "IsReviewed": false
    }
    localStorage.setItem("Order",JSON.stringify(order));
    console.log(order)
  }

  getproductcart()
  {
   if('cart'in localStorage){
     this.cart= JSON.parse( localStorage.getItem('cart')!)
     this.totallcost()
     console.log( this.cart);
   }}

   totallcost(){
    this.total=0
    for(const x in this.cart){
      this.total+=this.cart[x].item.Price*this.cart[x].quantity
       console.log(this.total);
       
    }
  }

   
}
