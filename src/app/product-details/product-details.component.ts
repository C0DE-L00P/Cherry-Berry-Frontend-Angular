import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductsService } from '../Services/products.service';
import { UsersService } from '../Services/users.service';
import { IProduct } from '../SharedClasses&Interfaces/IProduct';
import { IReview } from '../SharedClasses&Interfaces/IReview';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  // @ViewChild('productImgElement') productImgElement!: ElementRef;
  userAuth: boolean = localStorage.getItem('User') != null;
  product: IProduct = {
    _id: '',
    Name: '',
    Brand: '',
    Imgs: [],
    Category: '',
    Price: 0,
    Sold: 0,
    Rating: 0,
    Reviews: [],
    IsPreOrder: false,
    DescBullets: '',
    Desc: '',
    Quantity: 0,
    HowToUse: [],
    Features: [],
    Banner: '',
    FAQs: [],
    Extra: undefined,
  };

  ReviewsList: any[] = [];
  videoURL: string = '../../assets/banner.jpg';

  ProductsList!: any;
  errorMsg!: string;
  constructor(
    private productsService: ProductsService,
    private usersService: UsersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let ProductId = params.get('id') || '';
      this.productsService
        .GetProductByIDFromAPI(ProductId)
        .subscribe((product) => {
          this.product = product;
          this.ReviewsList = product.Reviews;
          this.videoURL = product.HowToUse[0][0];
        });
    });

    this.productsService.GetAllProducts().subscribe(
      (productsData) => {
        this.ProductsList = productsData;
      },
      (error) => {
        this.errorMsg = error;
      }
    );
  }

  onZoom(e: any) {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    e.target.style.transformOrigin = `${x}px ${y}px`;
    e.target.style.transform = 'scale(1.5)';
  }
  offZoom(e: any) {
    e.target.style.transformOrigin = `center center`;
    e.target.style.transform = 'scale(1)';
  }

  amount: number = 1;

  changeQuantityOrdered(isIncrementProcess: boolean) {
    this.amount = isIncrementProcess
      ? this.amount + 1
      : this.amount == 1
      ? this.amount
      : this.amount - 1;
    // parseInt($scope.num1) + parseInt($scope.num2)
  }

  goToDetails(id: string) {
    this.router.navigate(['product', id]);
  }

  cart: any[] = [];

  // addProduct(product: any) {
  //   var obj = { item: product, quantity: this.amount };

  //   //  if (this.user) {
  //   //    console.log('yes');
  //   //  } else {
  //   if ('cart' in localStorage) {
  //     this.cart = JSON.parse(localStorage.getItem('cart')!);
  //     var exist = this.cart.find((itemm) => itemm._id == obj.item._id);
  //     if (exist) {
  //       alert('This product is already added');
  //     } else {
  //       this.cart.push(obj);
  //       localStorage.setItem('cart', JSON.stringify(this.cart));
  //     }
  //   } else {
  //     this.cart.push(obj);
  //     localStorage.setItem('cart', JSON.stringify(this.cart));
  //   }
  //   //  }
  // }

  sendReview(body: any, in_author: any, in_email: any, rememberMe: any) {
    let review = {
      Author: '',
      AuthorImg: '',
      Email: '',
      PublishDate: new Date(),
      Content: body,
      Rating: 0,
    };

    //Handling User Data in local When offline
    if (this.userAuth) {
      //he is logged in
      let user = JSON.parse(localStorage.getItem('User')!);
      review.Author = user.FirstName + ' ' + user.LastName;
      review.Email = user.Email;

      this.productsService.PostReview(review);
      let reviewsAfterAdding = user.Reviews?.push(review);

      this.usersService.PutUser(user._id, {
        ...user,
        Reviews: reviewsAfterAdding,
      });
    } else {
      //he is not logged in
      review.Email = in_email;
      review.Author = in_author;
      let prevReviews = JSON.parse(localStorage.getItem('Reviews')!) || [];
      prevReviews?.push(review);
      localStorage.setItem('Reviews', prevReviews);
    }

    this.productsService.PostReview(review);
    this.ReviewsList.push(review);

    //Remember me

    if (rememberMe.checked) {
      localStorage.setItem('Name', in_author);
      localStorage.setItem('Email', in_email);
    }
  }

  CartInLocal: any = JSON.parse(localStorage.getItem('cart')!);

  addToCart(product: any, amount: number) {
    if (this.CartInLocal?.indexOf(product) == -1 || this.CartInLocal == null) {
      //Handle Local Storage
      let listProductsInCart = this.CartInLocal || [];
      let indexPro = listProductsInCart.indexOf(product);
      if (indexPro != -1) {
        //Product is already in the cart just modify the quantity
        listProductsInCart[indexPro] = { Product: product, Quantity: amount };
      } else {
        //Product is not in the cart add it
        listProductsInCart.push({ Product: product, Quantity: amount });
      }

      localStorage.setItem('cart', JSON.stringify(listProductsInCart));

      //Handle Database Storage if userAuth
      if (this.userAuth) {
        let user = JSON.parse(localStorage.getItem('User')!);
        //service call to put user info
        //TODO back to change _id if used any name else
        this.usersService.PutUser(user._id, {
          ...user,
          Cart: listProductsInCart,
        });
      }
    }
  }
}
