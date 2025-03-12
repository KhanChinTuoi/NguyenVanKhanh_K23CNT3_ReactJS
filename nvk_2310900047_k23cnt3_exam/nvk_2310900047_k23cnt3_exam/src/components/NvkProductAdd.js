import React, { useState } from "react";

const NvkProductAdd = ({ addProduct }) => {
  const [product, setProduct] = useState({
    NvkpName: "",
    NvkpQuantity: "",
    NvkpPrice: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.NvkpName && product.NvkpQuantity && product.NvkpPrice) {
      addProduct({
        ...product,
        NvkpQuantity: Number(product.NvkpQuantity),
        NvkpPrice: Number(product.NvkpPrice),
      });
      setProduct({ NvkpName: "", NvkpQuantity: "", NvkpPrice: "" });
    }
  };

  return (
    <div>
      <h2 className="text-center">Thêm sản phẩm</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="NvkpName" placeholder="Tên sản phẩm" value={product.NvkpName} onChange={handleChange} required />
        <input type="number" name="NvkpQuantity" placeholder="Số lượng" value={product.NvkpQuantity} onChange={handleChange} required />
        <input type="number" name="NvkpPrice" placeholder="Đơn Giá" value={product.NvkpPrice} onChange={handleChange} required />
        <button type="submit">Thêm</button>
      </form>
    </div>
  );
};

export default NvkProductAdd;