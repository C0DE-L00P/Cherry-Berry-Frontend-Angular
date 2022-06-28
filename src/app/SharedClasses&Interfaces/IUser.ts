export interface IUser {
  BillingAddress: {
    StreetAddress: String;
    Country: String;
    City: String;
  };
  ShippingAddress: {
    CompanyName: String;
    StreetAddress: String;
    Country: String;
    City: String;
    State: String;
    Postcode: Number;
  };
  _id: String;
  Username: String;
  FirstName: String;
  LastName: String;
  DisplayName: String;
  Email: String;
  Password: String;
  PaymentMethods: [];
  Phone: String;
  AlternativePhone: String;
  Orders: [];
  Favorites: [];
  Cart: [];
  Reviews: [];
}
