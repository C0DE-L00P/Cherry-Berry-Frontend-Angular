import { IPFAQ } from "./IPFAQ";
import { IPFeature } from "./IPFeature";

export interface IProduct{
    PID: number;
    Name: string;
    Brand: string;
    Imgs: string[];
    Category:string;
    Price: number;
    Sold: number;
    Rating: number;
    Reviews: number[];
    IsPreOrder: boolean;
    DescBullets:string;
    Desc: string;
    Quantity: number;
    HowToUse: any;
    Features: IPFeature[];
    Banner: string;
    FAQs: IPFAQ[];
    Extra: any;
}