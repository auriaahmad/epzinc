// pages/[id]/index.tsx

import { useRouter } from 'next/router';
import mockInventory from '@/mock/mockInventory'; // Adjust the import path as necessary
import ItemDescription from '@/components/ItemDescription';
import Layout from '@/components/Layout';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Get the id from the URL

  // Find the item with the matching id
  const product = mockInventory.find(item => item.id === id);

  // Handle case where product is not found (optional)
  if (!product) {
    return <Layout><p>Product not found.</p></Layout>;
  }

  return (
    <Layout>
      <ItemDescription
        imageBig={product.images[0]} // Main image
        images={product.images} // All images
        title={product.title}
        priceRange={product.priceRange}
        description={product.detailedDescription} // Pass the detailed description
        status={product.status} // Status
        quantity={product.quantity} // Quantity
        onClose={() => router.push('/for-sale')} // Redirect back to ForSale
      />
    </Layout>
  );
};

export default ProductDetail;