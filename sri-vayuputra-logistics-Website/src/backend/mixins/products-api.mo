import Debug "mo:base/Debug";
import List "mo:base/List";
import Text "mo:base/Text";
import Time "mo:base/Time";
import Types "../types/products";

module {
  public type Product = Types.Product;
  public type Document = Types.Document;
  public type DocumentType = Types.DocumentType;

  // Helper function to generate simple IDs
  func generateId() : Text {
    Debug.trap("ID generation not implemented - would use UUID or similar");
  };

  public func addProduct(
    products: List.List<Product>,
    name: Text,
    imageUrl: Text,
    description: ?Text,
    category: ?Text
  ) : List.List<Product> {
    let product : Product = {
      id = generateId();
      name = name;
      imageUrl = imageUrl;
      description = description;
      category = category;
      createdAt = Time.now();
    };
    List.push(product, products);
  };

  public func getAllProducts(products: List.List<Product>) : [Product] {
    List.toArray(products);
  };

  public func deleteProduct(products: List.List<Product>, productId: Text) : List.List<Product> {
    List.filter(products, func(p: Product) : Bool { p.id != productId });
  };

  public func addDocument(
    documents: List.List<Document>,
    name: Text,
    docType: DocumentType,
    url: Text
  ) : List.List<Document> {
    let document : Document = {
      id = generateId();
      name = name;
      docType = docType;
      url = url;
      uploadedAt = Time.now();
    };
    List.push(document, documents);
  };

  public func getAllDocuments(documents: List.List<Document>) : [Document] {
    List.toArray(documents);
  };

  public func deleteDocument(documents: List.List<Document>, documentId: Text) : List.List<Document> {
    List.filter(documents, func(d: Document) : Bool { d.id != documentId });
  };
};