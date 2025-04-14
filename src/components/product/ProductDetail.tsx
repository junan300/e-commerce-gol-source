import React from 'react';
import Image from 'next/image';

interface ProductDetailProps {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  features?: string[];
  inStock: boolean;
}

const ProductDetail = ({
  id,
  name,
  price,
  description,
  images,
  category,
  features = [],
  inStock
}: ProductDetailProps) => {
  const [mainImage, setMainImage] = React.useState(images[0]);
  const [quantity, setQuantity] = React.useState(1);

  const { addItem } = useCart();
  
  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price,
      image: images[0],
      quantity
    });
    
    // Show a toast notification
    const toast = document.getElementById('toast');
    if (toast) {
      toast.classList.remove('hidden');
      setTimeout(() => {
        toast.classList.add('hidden');
      }, 3000);
    }
  };

  return (
    <div className="bg-gray-900 text-white rounded-lg overflow-hidden shadow-xl border border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        {/* Product Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative h-80 w-full rounded-lg overflow-hidden border border-gray-700">
            <Image
              src={mainImage}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          
          {/* Thumbnail Images */}
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setMainImage(img)}
                className={`relative h-20 w-20 rounded border-2 flex-shrink-0 transition-all ${
                  mainImage === img ? 'border-purple-600 scale-105' : 'border-gray-700 opacity-70'
                }`}
              >
                <Image
                  src={img}
                  alt={`${name} thumbnail ${index + 1}`}
                  fill
                  className="object-cover rounded"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 text-xs font-medium bg-purple-600 text-white rounded-full">
                {category}
              </span>
              <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                inStock ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
              }`}>
                {inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>
            <h1 className="text-3xl font-bold mt-2 bg-gradient-to-r from-purple-400 to-blue-300 bg-clip-text text-transparent">
              {name}
            </h1>
            <p className="text-2xl font-bold text-blue-300 mt-2">${price.toFixed(2)}</p>
          </div>

          <p className="text-gray-300 leading-relaxed">{description}</p>

          {features.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-blue-300 mb-2">Features</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">Quantity:</span>
            <div className="flex items-center border border-gray-700 rounded-md">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 text-gray-300 hover:text-white focus:outline-none"
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="px-3 py-1 text-white">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 text-gray-300 hover:text-white focus:outline-none"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={!inStock}
            className={`w-full py-3 rounded-md font-medium transition-all ${
              inStock
                ? 'bg-gradient-to-r from-purple-600 to-blue-500 hover:opacity-90 text-white'
                : 'bg-gray-700 cursor-not-allowed text-gray-400'
            }`}
          >
            {inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>

          {/* Additional Info */}
          <div className="pt-4 border-t border-gray-800 grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-400">Product ID</p>
              <p className="text-gray-300">{id}</p>
            </div>
            <div>
              <p className="text-gray-400">Category</p>
              <p className="text-gray-300">{category}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
