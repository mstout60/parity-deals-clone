import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { AddToSiteProductModalContent } from "./add-to-site-product-modal-content";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { DeleteProductAlertDialogContent } from "./delete-product-alert-dialog-content";

export function ProductGrid({
  products,
}: {
  products: {
    name: string;
    url: string;
    description?: string | null;
    id: string;
  }[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}

export function ProductCard({
  id,
  name,
  url,
  description,
}: {
  name: string;
  url: string;
  description?: string | null;
  id: string;
}) {
  return (
    <Card>
      <CardHeader>
        <div className="flex gap-2 justify-between items-end">
          <CardTitle>
            <Link href={`/dashboard/products/${id}/edit`}>{name}</Link>
          </CardTitle>
          <Dialog>
            <AlertDialog>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="size-8 p-0">
                    <div className="sr-only">Action Menus</div>
                    <DotsHorizontalIcon className="size-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href={`/dashboard/products/${id}/edit`}>Edit</Link>
                  </DropdownMenuItem>
                  <DialogTrigger asChild>
                    <DropdownMenuItem>Add to Site</DropdownMenuItem>
                  </DialogTrigger>
                  <DropdownMenuSeparator />
                  <AlertDialogTrigger asChild>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </AlertDialogTrigger>
                </DropdownMenuContent>
              </DropdownMenu>
              <DeleteProductAlertDialogContent id={id} />
            </AlertDialog>
            <AddToSiteProductModalContent id={id} />
          </Dialog>
        </div>
        <CardDescription>{url}</CardDescription>
      </CardHeader>
      {description && <CardContent>{description}</CardContent>}
    </Card>
  );
}
