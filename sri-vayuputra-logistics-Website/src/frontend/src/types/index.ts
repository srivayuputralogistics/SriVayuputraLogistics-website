export interface ContactSubmission {
  id: bigint;
  name: string;
  phone: string;
  email: string;
  requirement: string;
  message: string;
  timestamp: bigint;
}

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  description?: string;
  category?: string;
  createdAt: bigint;
}

export interface Document {
  id: string;
  name: string;
  docType: DocumentType;
  url: string;
  uploadedAt: bigint;
}

export type DocumentType = "profile" | "gst" | "msme";
