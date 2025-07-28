"use client";
import React, { useState } from "react";
import { Star, Heart, ShoppingCart, Eye, Tag } from "lucide-react";

export function ProductCard({ product }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-100">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col space-y-2">
          {product.isNew && (
            <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
              NEW
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors group">
          <Heart className="w-4 h-4 text-gray-600 group-hover:text-red-500 transition-colors" />
        </button>

        {/* Product Image */}
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
          <div className="w-32 h-32 bg-gray-300 rounded"></div>
        </div>

        {/* Quick Action Buttons */}
        <div
          className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          <div className="flex space-x-2">
            <button className="flex-1 bg-white/90 backdrop-blur-sm text-gray-800 py-2 px-3 rounded-lg font-medium hover:bg-white transition-colors flex items-center justify-center space-x-2">
              <Eye className="w-4 h-4" />
              <span className="text-sm">Quick View</span>
            </button>
            <button
              disabled={!product.inStock}
              className={`flex-1 py-2 px-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 ${
                product.inStock
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="text-sm">
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-4">
        {/* Brand */}
        <p className="text-sm text-gray-600 mb-1">{product.brand}</p>

        {/* Product Name */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 leading-tight">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-3">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">{product.rating}</span>
          <span className="text-xs text-gray-500">({product.reviews})</span>
        </div>

        {/* Color Options */}
        {product.colors.length > 1 && (
          <div className="mb-3">
            <div className="flex space-x-2">
              {product.colors.slice(0, 3).map((color, index) => (
                <button
                  key={color}
                  style={{
                    backgroundColor:
                      index === 0
                        ? "#374151"
                        : index === 1
                        ? "#9CA3AF"
                        : "#F3F4F6",
                  }}
                  title={color}
                />
              ))}
              {product.colors.length > 3 && (
                <div className="w-6 h-6 rounded-full border-2 border-gray-300 bg-gray-100 flex items-center justify-center">
                  <span className="text-xs text-gray-600">
                    +{product.colors.length - 3}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-green-600">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
