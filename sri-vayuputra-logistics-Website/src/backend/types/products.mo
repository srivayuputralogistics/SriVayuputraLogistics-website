import Text "mo:base/Text";
import Time "mo:base/Time";

module {
  public type Product = {
    id: Text;
    name: Text;
    imageUrl: Text;
    description: ?Text;
    category: ?Text;
    createdAt: Time.Time;
  };

  public type Document = {
    id: Text;
    name: Text;
    docType: DocumentType;
    url: Text;
    uploadedAt: Time.Time;
  };

  public type DocumentType = {
    #profile;
    #gst;
    #msme;
  };
};