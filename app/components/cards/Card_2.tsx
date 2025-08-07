"use client";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Eye } from "lucide-react";
import Image from "next/image";

export default function ProductCard({
  item,
  isLiked = false,
  isInCart = false,
  className = "",
}) {
  return (
    <div
      className={`relative bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg ${className}`}
    >
      {/* Image Section */}
      <div className="relative aspect-square bg-gray-100">
        <Image
          src={item.image}
          alt={item.name}
          height={100}
          width={100}
          className="w-full h-full object-cover"
        />

        {/* Badges */}
        <div className="absolute top-2 left-2 flex gap-2">
          {item.discount > 0 && (
            <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
              -{item.discount}%
            </span>
          )}
          {item.isNew && (
            <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
              NEW
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div
          className={`absolute top-2 right-2 flex flex-col gap-2 transition-opacity`}
        >
          <button
            className={`p-2 rounded-full ${
              isLiked ? "bg-red-500 text-white" : "bg-white text-gray-700"
            } shadow-md`}
          >
            <Heart size={18} fill={isLiked ? "currentColor" : "none"} />
          </button>
          <button className="p-2 bg-white text-gray-700 rounded-full shadow-md">
            <Eye size={18} />
          </button>
        </div>

        {/* Out of Stock Overlay */}
        {!item.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-gray-800 text-white px-3 py-1 rounded text-sm font-medium">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="text-sm text-gray-500 uppercase">{item.brand}</p>
            <h3 className="font-semibold text-gray-900">{item.name}</h3>
          </div>
          <div className="text-right">
            <p className="font-bold text-lg">${item.price.toFixed(2)}</p>
            {item.originalPrice > item.price && (
              <p className="text-sm text-gray-400 line-through">
                ${item.originalPrice.toFixed(2)}
              </p>
            )}
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <span className="text-xs text-gray-500">
            ({item.reviews.toLocaleString()})
          </span>
        </div>

        {/* Add to Cart Button */}
        <Button className="bg-green-500">Buy now</Button>
      </div>
    </div>
  );
}
