import React from "react";
import { useState, useEffect } from "react";
import { Eye } from "lucide-react";
import ProductModal from "./../../ui/modal";
import { getApi } from "../../../api/http";

const SaleOff = () => {
  const [products, setProducts] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [color, setColor] = useState("teal");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await getApi("/products");
        console.log("Fetched products:", response);
        const data = Array.isArray(response) ? response : response.products;
        setProducts(data || []);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Failed to load products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="p-6 text-gray-500">Loading products...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div className="flex flex-col items-center gap-12">
      <div id="heading" className="text-center w-full">
        <div class="flex items-center justify-center space-x-4 mb-4 w-full">
          <div class="h-px w-3/10 bg-gray-200"></div>
          <h2 class="text-[40px] font-light text-gray-900">Sale Off</h2>
          <div class="h-px w-3/10 bg-gray-200"></div>
        </div>
        <p class="mt-3 text-gray-400 text-md">
          Mirum est notare quam littera gothica quam nunc putamus parum claram!
        </p>
      </div>

      <div
        id="posts"
        className="flex justify-center gap-8 container mx-auto flex-wrap"
      >
        {products &&
          products.map((product) => (
            <div id="post" key={product.id}>
              <div id="post-img" className="relative">
                <img
                  src={product.productImage}
                  alt={product.productName}
                  className="w-[300px] h-[400px] opacity-100 object-cover hover:opacity-0 duration-400 relative"
                />

                <div className="absolute top-13 right-2 bg-amber-700 text-white text-sm px-2 py-1 rotate-90 origin-top-right z-7">
                  -{product.discountPercent}%
                </div>

                <div className="absolute top-0 left-0 opacity-0 hover:opacity-100 duration-400">
                  <img
                    src={product.productHoverImage}
                    alt={`${product.productName} hover`}
                    className="w-[300px] h-[400px] object-cover"
                  />

                  <button
                    onClick={() => setOpenModal(true)}
                    className="absolute bottom-3 right-3 bg-black/70 p-2 rounded-full hover:bg-black transition z-9"
                  >
                    <Eye className="w-5 h-5 text-white" />
                  </button>

                  {openModal && (
                    <ProductModal
                      isOpen={openModal}
                      onClose={() => setOpenModal(false)}
                      product={product}
                    />
                  )}
                </div>

                <div className="flex justify-center space-x-2 my-3 z-8 absolute bottom-2 left-1/2 transform -translate-x-1/2">
                  {["teal", "black", "sky", "yellow"].map((c) => (
                    <button
                      key={c}
                      onClick={() => setColor(c)}
                      className={`w-5 h-5 rounded-full border-2 ${
                        color === c ? "border-gray-400" : "border-transparent"
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
              <div
                id="post-info"
                className="flex flex-col items-start justify-start gap-1 mt-4"
              >
                <div className="pb-4">
                  <h3 className="text-gray-600 text-md font-light mb-1">
                    {product.productName}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-semibold text-gray-900">
                      ${product.discountedPrice}.00
                    </span>
                    <span className="text-gray-400 line-through">
                      ${product.originalPrice}.00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div id="loadMore">
        <button className="px-10 py-4 bg-white border border-gray-400 text-black duration-200 text-[16px] font-medium hover:border-[#bc8246] hover:text-[#bc8246]">
          Load More
        </button>
      </div>
    </div>
  );
};

export default SaleOff;
