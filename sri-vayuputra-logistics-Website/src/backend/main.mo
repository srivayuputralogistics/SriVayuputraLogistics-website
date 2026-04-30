import List "mo:core/List";
import Types "types/contact";
import TypesProducts "types/products";
import ContactMixin "mixins/contact-api";
import ProductsMixin "mixins/products-api";

actor {
  let submissions = List.empty<Types.ContactSubmission>();
  let products = List.empty<TypesProducts.Product>();
  let documents = List.empty<TypesProducts.Document>();

  include ContactMixin(submissions);
  include ProductsMixin(products, documents);
};
