/** @jsxImportSource theme-ui */
import React from "react";
import "../store.scss";
import {ReactComponent as ShoppingBagIcon} from '../../assets/shopping-bag.svg';

const ProductItem = (params: any) => {
  // const { name, price, inStock, id, thumbnail, ...rest } = params;
  const { item, handleAddCart } = params;
  return (
    <div className="product-item card text-center" key={item.id}>
      <img
        className="mx-auto thumbnail"
        src={
          item.images?.small ||
          "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
        }
        alt={item.name}
      />
      <div className="product-item__detail">
        <p key={item.id} className="item-name text-center">
          {item.name}
        </p>
        <p className="item-info text-xs">
          {" "}
          ${item.cardmarket?.prices?.averageSellPrice || "n/a"} -{" "}
          {item.set?.total} cards
        </p>
        <button
          sx={{
            variant: "buttons.secondary",
            py: "8px",
            borderRadius: "8px",
            width: "100%",
            mt: "8px",
            fontSize: "12px",
            fontWeight: "700",
          }}
          onClick={() => handleAddCart(item.id, item.name, item.cardmarket?.prices?.averageSellPrice|| 0, item.images?.small)}
        >
          <span className="flex justify-center">
            <ShoppingBagIcon className="block my-auto mr-2 w-3 h-3"/>
          <span className="block">Add to Cart</span>
          </span>
        </button>
        
      </div>
    </div>
  );
};

export default ProductItem;
