import React, { useState } from "react";
import NvkProductList from "./components/NvkProductList";
import NvkProductAdd from "./components/NvkProductAdd";

const NvkApp = () => {
  const [products, setProducts] = useState([
    { NvkpID: "047", NvkpName: "Nguyễn Văn Khánh", NvkpQuantity: 1, NvkpPrice: 2310900047 },
    { NvkpID: 1, NvkpName: "Flycam", NvkpQuantity: 727, NvkpPrice: 3500000 },
    { NvkpID: 2, NvkpName: "Mesh Wifi 6", NvkpQuantity: 1000, NvkpPrice: 650000 },
  ]);

  // Xác định ID tiếp theo dựa trên sản phẩm cuối cùng
  const [nextID, setNextID] = useState(products.length ? products[products.length - 1].NvkpID + 1 : 1);

  const addProduct = (newProduct) => {
    const productWithID = { ...newProduct, NvkpID: nextID };
    setProducts([...products, productWithID]);
    setNextID(nextID + 1); // Tăng ID lên 1
  };

  return (
    <div className="container-border-mx-1">
      <h1 className="text-center">Quản lý sản phẩm</h1>
      <hr/>
      <NvkProductAdd addProduct={addProduct} />
      <hr/>
      <NvkProductList products={products} />
    </div>
  );
};

export default NvkApp;