import { notFound } from 'next/navigation';
import ProductDetail from '@/components/ProductDetail';
import { getAreaBySlug, getProductBySlug } from '@/data/profile';

interface ProductPageProps {
  params: Promise<{
    productSlug: string;
  }>;
}

export default async function PerformanceProductPage({ params }: ProductPageProps) {
  const { productSlug } = await params;
  const area = getAreaBySlug('performance');
  const product = getProductBySlug('performance', productSlug);

  if (!area || !product) {
    notFound();
  }

  return <ProductDetail product={product} areaTitle={area.title} />;
}

export async function generateStaticParams() {
  const area = getAreaBySlug('performance');
  if (!area) return [];

  return area.products.map((product) => ({
    productSlug: product.id,
  }));
}
