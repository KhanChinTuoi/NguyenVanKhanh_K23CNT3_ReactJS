import React from "react";

const NvkProductList = ({ products }) => {
  return (
    <div>
      <h2 className="text-center">Danh sách sản phẩm</h2>
      <table border="2" width="100%" >
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Đơn Giá</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.NvkpID}>
              <td>{product.NvkpID}</td>
              <td>{product.NvkpName}</td>
              <td>{product.NvkpQuantity}</td>
              <td>{(product.NvkpPrice).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NvkProductList;