/** @jsxImportSource theme-ui */
import { useSelector, useDispatch } from "react-redux";
import { Close, Divider } from "theme-ui";
import { clearCart, changeQty } from "../reducer/StoreSlice";

const CartDrawer = (props: any) => {
  const cart = useSelector((state: any) => state.store.cart);
  const dispatch = useDispatch();

  const clearAllCart = (e: any) => {
    e.preventDefault();
    dispatch(clearCart());
  };

  const changePurchaseQty = (id: string, change: number) => {
    dispatch(changeQty({ id, change }));
  };
  return (
    <div sx={{ bg: "#252836", height: "100vw", padding: "24px" }}>
      <div className="flex">
        <div className="flex-1">
          <h2>Cart</h2>
          <a className="cursor-pointer underline" onClick={clearAllCart}>
            Clear all
          </a>
        </div>
        <div>
          <button
            onClick={props.onClose}
            sx={{
              variant: "buttons.primary",
              borderRadius: "8px",
              width: "48px",
              height: "48px",
              position: "absolute",
              top: "24px",
              right: "20px",
            }}
          >
            X
          </button>
        </div>
      </div>
      <div sx={{ mt: "24px" }} className="flex flex-row justify-start">
        <p className="w-1/4">Item</p>
        <p className="w-2/4">Qty</p>
        <p className="w-1/4 text-right">Price</p>
      </div>
      <Divider />
      <div className="cartList">
        {cart.map((item: any) => (
          <div>
            <div sx={{ mt: "24px" }} className="flex flex-row justify-start">
              <div>
                <img sx={{ width: "44px", height: "60px" }} src={item.image} />
              </div>
              <div className="w-2/4 mx-4">
                <p sx={{ fontSize: "12px", fontWeight: "600" }}>{item.name}</p>
                <p sx={{ fontSize: "12px", color: "#ABBBC2" }}>${item.price}</p>
              </div>
              <p
                sx={{ fontSize: "12px", fontWeight: "600" }}
                className="w-1/4 text-right"
              >
                ${Number(item.price * item.qty).toFixed(2)}
              </p>
            </div>
            <div sx={{ mt: "24px" }} className="flex flex-row justify-start">
              <button
                onClick={() => changePurchaseQty(item.id, -1)}
                sx={{
                  variant: "buttons.third",
                  lineHeight: "54px",
                  width: "54px",
                  height: "54px",
                  borderRadius: "8px",
                }}
                className="text-center"
              >
                -
              </button>
              <div
                sx={{
                  padding: "14px",
                  borderRadius: "8px",
                  bg: "#312F3C",
                  top: "11px",
                  left: "20px",
                }}
                className="text-center grow mx-2"
              >
                {item.qty}
              </div>
              <div
                onClick={() => changePurchaseQty(item.id, +1)}
                sx={{
                  variant: "buttons.third",
                  lineHeight: "54px",
                  width: "54px",
                  height: "54px",
                  borderRadius: "8px",
                }}
                className="text-center"
              >
                +
              </div>
            </div>
          </div>
        ))}
      </div>
      <div sx={{py:'24px'}} className="subTotal">
        <div>
        <div className="justify-between">
          <p sx={{fontSize:'12px', fontWeight:'400', color:"#ABBBC2"}} className="inline-block w-1/2">Total card amount</p>
          <p sx={{fontSize:'16px', fontWeight:'600', color:"#FFF"}} className="inline-block w-1/2 text-right">
            {cart.reduce((prev: any, curr: any) => {
              if (curr !== null) return prev + curr.qty;
            }, 0)}
          </p>
        </div>
        <div className="justify-between">
          <p sx={{fontSize:'12px', fontWeight:'400', color:"#ABBBC2"}} className="inline-block w-1/2">Total price</p>
          <p sx={{fontSize:'16px', fontWeight:'600', color:"#FFF"}} className="inline-block w-1/2 text-right">
            $ {cart.reduce((prev: any, curr: any) => {
              if (curr !== null)
                return Number(
                  Number(prev) + Number(curr.price * curr.qty)
                ).toFixed(2);
            }, 0)}
          </p>
        </div>
        <button
            onClick={props.onClose}
            sx={{
              variant: "buttons.primary",
              borderRadius: "8px",
              my:'16px',
              width: "100%",
              height: "48px",
            }}
          >
            Continue to Purchase
          </button>
      </div>
      </div>
    </div>
  );
};

export default CartDrawer;
