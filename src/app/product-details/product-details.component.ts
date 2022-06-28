import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import { IProduct } from '../SharedClasses&Interfaces/IProduct';
import { IReview } from '../SharedClasses&Interfaces/IReview';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  // @ViewChild('productImgElement') productImgElement!: ElementRef;
  userAuth:boolean = true
  product: IProduct = {
    PID: 0,
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

  ReviewsList: IReview[] = [];
  videoURL:string = '../../assets/banner.jpg'; 

  ProductsList!: any;
  errorMsg!: string;
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.GetAllReviews().subscribe(
      (reviews) => {
        this.productsService.GetAllProducts().subscribe(
          (productsData) => {
            this.ProductsList = productsData;
            try {
              this.product = this.ProductsList[2]; //TODO Make this dynamic
              this.videoURL = this.product.HowToUse[0][0]

              // this.ReviewsList = reviews?.map((review)=>this.product.Reviews.indexOf(review.RID) != -1)
              for(let review of reviews){
                 if(this.product.Reviews.includes(review.RID)) this.ReviewsList.push(review)
              }
            } catch (error) {
              console.log("Error While Creating Product",error)
            }
          },
          (error) => {
            this.errorMsg = error;
          }
        );
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

  changeQuantityOrdered(value:any, isIncrementProcess:boolean){
    console.log('value',value)
    // parseInt($scope.num1) + parseInt($scope.num2)

  }
}
