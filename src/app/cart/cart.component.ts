import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private router: Router) { }
  cart:any[]=[]
  total:number=0
  quantity: number = 1;

  @ViewChild('disbtn') ablbtn!:ElementRef
  @ViewChild('dbtn') clrbtn!:ElementRef
  @ViewChild('space') spacecart!:ElementRef

  ngOnInit(): void {
    this.getproductcart()
  }

  getproductcart()
 {
  if('cart'in localStorage){
    this.cart= JSON.parse( localStorage.getItem('cart')!)
    this.totallcost()
    // console.log( this.cart);
    
  }
 
 }

  increase(index:number) {
    this.cart[index].quantity++
    this.ablbtn.nativeElement.disabled=false
      this.totallcost()
     localStorage.setItem('cart',JSON.stringify(this.cart))
  }

  decrease(index:number) { 
    if ( this.cart[index].quantity>1) {
       this.cart[index].quantity--
       this.totallcost()
       localStorage.setItem('cart',JSON.stringify(this.cart))
     }
   }
 

  deleteone(index:number){
    if(this.cart[index].quantity>1){
      this.cart.splice(index,1)
      this.totallcost()
     localStorage.setItem('cart',JSON.stringify(this.cart))
    }
  
  }

  deleteall(){
    this.cart=[]
    this.ablbtn.nativeElement.style.display='none'
    this.clrbtn.nativeElement.style.display='none'
    this.spacecart.nativeElement.style.display='block'
    this.totallcost()
    localStorage.setItem('cart',JSON.stringify(this.cart))
  }

  totallcost(){
    this.total=0
    for(const x in this.cart){
      this.total+=this.cart[x].item.Price*this.cart[x].quantity
       console.log(this.total);
       
    }
  }

  disAbleBtn(){
    this.ablbtn.nativeElement.disabled=true
  }


}

// isShown: boolean = false;
//   gotoCart() {
//     this.router.navigate(['cart']);
//     console.log('done')
//     this.isShown = false;
//   };
//   closeCanvas() {
//     this.isShown = false;
//   }
//   openCanvas() {
//     this.isShown = true;
//   }
//   gotoCheckOut() {
//     this.router.navigate(['checkOut']);
//     console.log('done')
//     this.isShown = false;
//   };
