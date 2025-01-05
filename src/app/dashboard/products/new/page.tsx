import { PageWithBackButton } from "@/app/dashboard/_component/page-with-back-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductDetailsForm } from "@/app/dashboard/_component/forms/product-details-form";

export default function NewProductPage() {
  return (
    <PageWithBackButton
      pageTitle="Create Product"
      backButtonHref="/dashboard/products"
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Product Details</CardTitle>
        </CardHeader>
        <CardContent>
          <ProductDetailsForm />
        </CardContent>
      </Card>
    </PageWithBackButton>
  );
}
