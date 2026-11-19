import { useState } from "react";

type AddOrderFormProps = {
  h1?: string;
  p1?: string;
  label1?: string;
  label2?: string;
  label3?: string;
  h2?: string;
  p2?: string;
  p3?: string;
  btn1?: string;
  btn2?: string;

  onAddOrder: (order: any) => Promise<void>;
};

function AddOrderForm({
  h1,
  p1,
  label1,
  label2,
  label3,
  p2,
  p3,
  h2,
  btn1,
  btn2,

  onAddOrder,
}: AddOrderFormProps) {
  const [product, setProduct] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [status, setStatus] = useState("Pending");
  const [inStock, setInStock] = useState(true);

  const [productError, setProductError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [quantityError, setQuantityError] = useState("");

  const handleClear = () => {
    setProduct("");
    setPrice("");
    setQuantity("");

    setStatus("Pending");
    setInStock(true);

    setProductError("");
    setPriceError("");
    setQuantityError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setProductError("");
    setPriceError("");
    setQuantityError("");

    if (!product.trim()) {
      setProductError("Product name is required");
      return;
    }

    if (Number(price) <= 0) {
      setPriceError("Price must be greater than 0");
      return;
    }

    if (Number(quantity) <= 0) {
      setQuantityError("Quantity must be greater than 0");
      return;
    }

    const newOrder = {
      id: Date.now(),
      product,
      price: Number(price),
      quantity: Number(quantity),
      status,
      inStock,
    };

    await onAddOrder(newOrder);

    setProduct("");
    setPrice("");
    setQuantity("");
    setStatus("Pending");
    setInStock(true);
  };

  return (
    <div
      id="add-order-section"
      className="add-order-section max-w-7xl mx-auto px-6 mt-8 mb-8"
    >
      <div className="bg-blue-50 rounded-3xl shadow-lg border  border-blue-300 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800">{h1}</h2>
          <p className="text-slate-500 mt-1">{p1}</p>
        </div>

        <form
          id="add-order-form"
          onSubmit={handleSubmit}
          className="add-order-form grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="flex flex-col">
            <label className="text-slate-700 font-medium mb-2">
              {" "}
              {label1}{" "}
            </label>
            <input
              id="product-input"
              name="product"
              type="text"
              value={product}
              onChange={(e) => {
                setProduct(e.target.value);
                setProductError("");
              }}
              placeholder="Enter product name"
              className="border border-slate-300 rounded-xl px-4 py-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
            />
            {productError && (
              <p className="text-red-600 text-sm mt-2">{productError}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-slate-700 font-medium mb-2"> {label2}</label>
            <input
              id="price-input"
              name="price"
              type="number"
              min="1"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
                setPriceError("");
              }}
              placeholder="Enter unit price"
              className="border border-slate-300 rounded-xl px-4 py-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
            />
            {priceError && (
              <p className="text-red-600 text-sm mt-2">{priceError}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-slate-700 font-medium mb-2"> {label3}</label>
            <input
              id="quantity-input"
              name="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
                setQuantityError("");
              }}
              placeholder="Enter the quantity"
              className="border border-slate-300 rounded-xl pl-3  py-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
            />
            {quantityError && (
              <p className="text-red-600 text-sm mt-2">{quantityError}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="text-slate-700 font-medium mb-2">
              Order Status
            </label>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border border-slate-300 rounded-xl px-4 py-4"
            >
              <option value="Pending">Pending</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-slate-700 font-medium mb-2">
              Stock Status
            </label>

            <select
              value={String(inStock)}
              onChange={(e) => setInStock(e.target.value === "true")}
              className="border border-slate-300 rounded-xl px-4 py-4"
            >
              <option value="true">In Stock</option>
              <option value="false">Out of Stock</option>
            </select>
          </div>{" "}
          <br />
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-center">
            <p className="text-slate-500 text-sm"> {p2}</p>
            <h3 className="text-lg font-semibold text-slate-800 mt-2">
              {" "}
              {h2}{" "}
            </h3>
            <p className="text-slate-500 mt-2"> {p3} </p>
          </div>
          <div className="flex justify-end gap-4 mt-15">
            <button
              id="clear-order-form-btn"
              type="reset"
              onClick={handleClear}
              className="clear-order-form-btn w-[100px] h-[60px] rounded-xl border border-slate-400 text-slate-700 font-medium cursor-pointer hover:bg-slate-300 transition"
            >
              {" "}
              {btn1}{" "}
            </button>

            <button
              id="add-order-btn"
              type="submit"
              className="add-order-btn w-[150px] h-[60px] rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-800 cursor-pointer hover:shadow-lg transition-all duration-300 "
            >
              {" "}
              {btn2}{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddOrderForm;
