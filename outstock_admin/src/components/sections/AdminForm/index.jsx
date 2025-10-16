import React from "react";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { postApi, getApi } from "../../../api/http";

const AdminForm = () => {
  // ✅ Fetch products (optional, just to keep the cache fresh)
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await getApi("/products");
      return res.data;
    },
  });

  // ✅ Form state
  const [form, setForm] = useState({
    productName: "",
    discountPercent: "",
    productImage: "",
    productHoverImage: "",
    originalPrice: "",
    discountedPrice: "",
    productDetails: "",
  });

  const queryClient = useQueryClient();

  // ✅ Handle form field updates
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Proper useMutation setup
  const {
    mutate,
    isPending,
    isError: createIsErr,
    error: createErr,
  } = useMutation({
    mutationKey: ["createProduct"],
    mutationFn: async (newProduct) => {
      const res = await postApi("/products", newProduct);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
      setForm({
        productName: "",
        discountPercent: "",
        productImage: "",
        productHoverImage: "",
        originalPrice: "",
        discountedPrice: "",
        productDetails: "",
      });
    },
  });

  return (
    <div>
      <div class="bg-white border rounded-lg shadow relative m-10">
        <div class="flex items-start justify-between p-5 border-b rounded-t">
          <h3 class="text-xl font-semibold">Edit product</h3>
          <button
            type="button"
            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            data-modal-toggle="product-modal"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div class="p-6 space-y-6">
          <form action="#">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  htmlFor="productName"
                  class="text-sm font-medium text-gray-900 block mb-2"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  name="productName"
                  id="productName"
                  onChange={handleChange}
                  value={form.productName}
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Apple Imac 27”"
                  required=""
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  htmlFor="discountPercent"
                  class="text-sm font-medium text-gray-900 block mb-2"
                >
                  Discount Percent
                </label>
                <input
                  type="text"
                  name="discountPercent"
                  id="discountPercent"
                  onChange={handleChange}
                  value={form.discountPercent}
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="40%"
                  required=""
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  htmlFor="productImage"
                  class="text-sm font-medium text-gray-900 block mb-2"
                >
                  Product Image (Link)
                </label>
                <input
                  type="text"
                  name="productImage"
                  id="productImage"
                  onChange={handleChange}
                  value={form.productImage}
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Enter Link"
                  required=""
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  htmlFor="productHoverImage"
                  class="text-sm font-medium text-gray-900 block mb-2"
                >
                  Product Hover Image (Link)
                </label>
                <input
                  type="text"
                  name="productHoverImage"
                  id="productHoverImage"
                  onChange={handleChange}
                  value={form.productHoverImage}
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Enter Link"
                  required=""
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  htmlFor="originalPrice"
                  class="text-sm font-medium text-gray-900 block mb-2"
                >
                  Original Price
                </label>
                <input
                  type="text"
                  name="originalPrice"
                  id="originalPrice"
                  onChange={handleChange}
                  value={form.originalPrice}
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="200%"
                  required=""
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  htmlFor="discountedPrice"
                  class="text-sm font-medium text-gray-900 block mb-2"
                >
                  Discounted Price
                </label>
                <input
                  type="number"
                  name="discountedPrice"
                  id="discountedPrice"
                  onChange={handleChange}
                  value={form.discountedPrice}
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="$1000 after Discount"
                  required=""
                />
              </div>
              <div class="col-span-full">
                <label
                  htmlFor="productDetails"
                  class="text-sm font-medium text-gray-900 block mb-2"
                >
                  Product Details
                </label>
                <textarea
                  id="productDetails"
                  name="productDetails"
                  onChange={handleChange}
                  value={form.productDetails}
                  rows="6"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                  placeholder="Product Details"
                ></textarea>
              </div>
            </div>
          </form>
        </div>

        <div class="p-6 border-t border-gray-200 rounded-b">
          <button
            class="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            type="submit"
            disabled={isPending}
            onClick={() => {
              mutate(form);
            }}
          >
            {isPending ? "Saving..." : "Save product"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminForm;
