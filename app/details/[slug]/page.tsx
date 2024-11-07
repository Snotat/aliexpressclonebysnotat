import ProductDetails from "@/components/ProductDetails";

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <div>
            <ProductDetails itemID={params.slug} />
        </div>
    )
}
