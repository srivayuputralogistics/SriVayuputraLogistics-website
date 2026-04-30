import { useState, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Camera, Upload, Trash2, Plus, Lock, Eye, EyeOff } from "lucide-react";
import { motion } from "motion/react";
import { useGetProducts, useAddProduct, useDeleteProduct, useGetDocuments, useAddDocument, useDeleteDocument } from "@/hooks/useBackend";
import type { Product, Document, DocumentType } from "@/types";

const ADMIN_CREDENTIALS = {
  username: "SriVayuputraLogistics",
  password: "SriVayuputra@6889"
};

export default function AdminPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [productForm, setProductForm] = useState({
    name: "",
    description: "",
    category: "",
    imageUrl: ""
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  const queryClient = useQueryClient();

  // Mock data - will be replaced with backend calls
  const { data: products = [], isLoading: productsLoading } = useGetProducts();
  const { data: documents = [], isLoading: documentsLoading } = useGetDocuments();

  const addProductMutation = useAddProduct();
  const deleteProductMutation = useDeleteProduct();
  const addDocumentMutation = useAddDocument();
  const deleteDocumentMutation = useDeleteDocument();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Invalid credentials");
    }
  };

  const handleImageUpload = (file: File, isCamera = false) => {
    // Mock upload - will be replaced with actual upload logic
    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target?.result as string;
      setProductForm(prev => ({ ...prev, imageUrl }));
    };
    reader.readAsDataURL(file);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const handleCameraCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageUpload(file, true);
    }
  };

  const handleProductSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addProductMutation.mutateAsync({
        name: productForm.name,
        imageUrl: productForm.imageUrl,
        description: productForm.description,
        category: productForm.category
      });
      setIsProductDialogOpen(false);
      setProductForm({ name: "", description: "", category: "", imageUrl: "" });
    } catch (error) {
      console.error("Failed to add product:", error);
    }
  };

  const handleDocumentUpload = async (type: 'profile' | 'gst' | 'msme') => {
    // Mock document upload - will be replaced with actual upload logic
    try {
      // For now, just add a placeholder document
      await addDocumentMutation.mutateAsync({
        name: `${type}-document.pdf`,
        docType: type,
        url: `https://example.com/${type}-document.pdf`
      });
    } catch (error) {
      console.error("Failed to upload document:", error);
    }
  };

  const deleteProduct = async (productId: string) => {
    try {
      await deleteProductMutation.mutateAsync(productId);
    } catch (error) {
      console.error("Failed to delete product:", error);
    }
  };

  const deleteDocument = async (documentId: string) => {
    try {
      await deleteDocumentMutation.mutateAsync(documentId);
    } catch (error) {
      console.error("Failed to delete document:", error);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center py-16">
        <div className="container max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-card border-border shadow-elevated">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mx-auto mb-5">
                  <Lock className="w-8 h-8 text-primary" />
                </div>
                <Badge className="mb-3 text-xs tracking-widest uppercase bg-primary/10 text-primary border-primary/20 mx-auto block w-fit">
                  Admin Portal
                </Badge>
                <h1 className="font-display font-bold text-2xl text-foreground mb-3 text-center">
                  Admin Login
                </h1>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter username"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </div>
                  {loginError && (
                    <p className="text-sm text-destructive">{loginError}</p>
                  )}
                  <Button type="submit" className="w-full">
                    Login
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <div className="container max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <Badge className="mb-4 text-xs tracking-widest uppercase bg-primary/10 text-primary border-primary/20">
                Admin Dashboard
              </Badge>
              <h1 className="font-display font-bold text-4xl text-foreground mb-2">
                Content Management
              </h1>
              <p className="text-muted-foreground">
                Manage products, company documents, and website content
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => setIsLoggedIn(false)}
            >
              Logout
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Products Management */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Products Management</CardTitle>
                <Dialog open={isProductDialogOpen} onOpenChange={setIsProductDialogOpen}>
                  <DialogTrigger asChild>
                    <Button size="sm">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Product
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>
                        {editingProduct ? "Edit Product" : "Add New Product"}
                      </DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleProductSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="product-name">Product Name</Label>
                        <Input
                          id="product-name"
                          value={productForm.name}
                          onChange={(e) => setProductForm(prev => ({ ...prev, name: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="product-category">Category</Label>
                        <Input
                          id="product-category"
                          value={productForm.category}
                          onChange={(e) => setProductForm(prev => ({ ...prev, category: e.target.value }))}
                        />
                      </div>
                      <div>
                        <Label htmlFor="product-description">Description</Label>
                        <Textarea
                          id="product-description"
                          value={productForm.description}
                          onChange={(e) => setProductForm(prev => ({ ...prev, description: e.target.value }))}
                          rows={3}
                        />
                      </div>
                      <div>
                        <Label>Product Image</Label>
                        <div className="flex gap-2 mt-2">
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => fileInputRef.current?.click()}
                          >
                            <Upload className="w-4 h-4 mr-2" />
                            Upload
                          </Button>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => cameraInputRef.current?.click()}
                          >
                            <Camera className="w-4 h-4 mr-2" />
                            Camera
                          </Button>
                        </div>
                        <input
                          ref={fileInputRef}
                          type="file"
                          accept="image/*"
                          onChange={handleFileSelect}
                          className="hidden"
                        />
                        <input
                          ref={cameraInputRef}
                          type="file"
                          accept="image/*"
                          capture="environment"
                          onChange={handleCameraCapture}
                          className="hidden"
                        />
                        {productForm.imageUrl && (
                          <div className="mt-2">
                            <img
                              src={productForm.imageUrl}
                              alt="Preview"
                              className="w-32 h-32 object-cover rounded border"
                            />
                          </div>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button type="submit">
                          {editingProduct ? "Update" : "Add"} Product
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setIsProductDialogOpen(false)}
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </CardHeader>
            <CardContent>
              {productsLoading ? (
                <div className="space-y-4">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="animate-pulse flex items-center gap-4">
                      <div className="w-16 h-16 bg-muted rounded"></div>
                      <div className="flex-1">
                        <div className="h-4 bg-muted rounded mb-2"></div>
                        <div className="h-3 bg-muted rounded"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : products.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  No products added yet
                </p>
              ) : (
                <div className="space-y-4">
                  {products.map((product) => (
                    <div key={product.id} className="flex items-center gap-4 p-4 border rounded">
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold">{product.name}</h4>
                        {product.category && (
                          <Badge variant="secondary" className="text-xs">
                            {product.category}
                          </Badge>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setEditingProduct(product);
                            setProductForm({
                              name: product.name,
                              description: product.description || "",
                              category: product.category || "",
                              imageUrl: product.imageUrl
                            });
                            setIsProductDialogOpen(true);
                          }}
                        >
                          Edit
                        </Button>
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button size="sm" variant="destructive">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete Product</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete "{product.name}"? This action cannot be undone.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction
                                onClick={() => deleteProduct(product.id)}
                                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                              >
                                Delete
                              </AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Documents Management */}
          <Card>
            <CardHeader>
              <CardTitle>Company Documents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Company Profile */}
              <div className="p-4 border rounded">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">Company Profile</h4>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDocumentUpload('profile')}
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload
                  </Button>
                </div>
                {documents.filter(d => d.docType === 'profile').length === 0 ? (
                  <p className="text-sm text-muted-foreground">No profile document uploaded</p>
                ) : (
                  <div className="space-y-2">
                    {documents.filter(d => d.docType === 'profile').map((doc) => (
                      <div key={doc.id} className="flex items-center justify-between">
                        <span className="text-sm">{doc.name}</span>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => deleteDocument(doc.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* GST Certificate */}
              <div className="p-4 border rounded">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">GST Certificate</h4>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDocumentUpload('gst')}
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload
                  </Button>
                </div>
                {documents.filter(d => d.docType === 'gst').length === 0 ? (
                  <p className="text-sm text-muted-foreground">No GST certificate uploaded</p>
                ) : (
                  <div className="space-y-2">
                    {documents.filter(d => d.docType === 'gst').map((doc) => (
                      <div key={doc.id} className="flex items-center justify-between">
                        <span className="text-sm">{doc.name}</span>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => deleteDocument(doc.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* MSME Certificate */}
              <div className="p-4 border rounded">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">MSME Certificate</h4>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDocumentUpload('msme')}
                  >
                    <Upload className="w-4 h-4 mr-2" />
                    Upload
                  </Button>
                </div>
                {documents.filter(d => d.docType === 'msme').length === 0 ? (
                  <p className="text-sm text-muted-foreground">No MSME certificate uploaded</p>
                ) : (
                  <div className="space-y-2">
                    {documents.filter(d => d.docType === 'msme').map((doc) => (
                      <div key={doc.id} className="flex items-center justify-between">
                        <span className="text-sm">{doc.name}</span>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => deleteDocument(doc.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}