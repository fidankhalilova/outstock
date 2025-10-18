import React, { useState } from "react";
import { X } from "lucide-react";

export default function ProductModal({ isOpen, onClose, product }) {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("teal");

  if (!isOpen || !product) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-4xl p-6 relative animate-fadeIn"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black transition"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex flex-col md:flex-row gap-8">
          {/* --- Image Section --- */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={product.productImage}
              alt={product.productName}
              className="w-100 h-100 object-cover rounded-lg"
            />
          </div>

          {/* --- Content Section --- */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-2">
              {product.productName}
            </h2>
            <div className="flex items-center gap-3 mb-2">
              <p className="text-xl font-bold">${product.discountedPrice}.00</p>
              {product.originalPrice && (
                <p className="text-gray-400 line-through">
                  ${product.originalPrice}.00
                </p>
              )}
            </div>

            <p className="text-sm text-gray-600 mb-2">
              Availability:{" "}
              <span className="text-blue-500 font-medium">
                {product.inStock ? "In stock" : "Out of stock"}
              </span>
            </p>
            <p className="text-sm text-gray-500 mb-3">
              SKU: {product.sku || "N/A"}
            </p>

            <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-3">
              {product.productDetails ||
                "No detailed description available for this product."}
            </p>

            {/* Color Selection */}
            <div className="mb-4">
              <p className="font-medium mb-2">Color</p>
              <div className="flex gap-3">
                {["teal", "black", "sky", "yellow"].map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`w-7 h-7 rounded-full border-2 ${
                      color === c ? "border-black" : "border-transparent"
                    }`}
                    style={{
                      backgroundColor:
                        c === "teal"
                          ? "#2c9191"
                          : c === "black"
                          ? "#000"
                          : c === "sky"
                          ? "#7dd3fc"
                          : "#facc15",
                    }}
                  ></button>
                ))}
              </div>
            </div>

            {/* Quantity + Add To Cart */}
            <div className="flex items-center gap-3">
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={() => setQuantity((q) => (q > 1 ? q - 1 : q))}
                  className="px-3 py-1 text-lg"
                >
                  −
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-1 text-lg"
                >
                  +
                </button>
              </div>
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
                Add To Cart
              </button>
            </div>

            <div className="mt-4 text-sm text-gray-500">
              <p>
                Product type:{" "}
                <span className="text-black">
                  {product.productType || "N/A"}
                </span>
              </p>
              <p>
                Brand:{" "}
                <span className="text-black">{product.brand || "Unknown"}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
