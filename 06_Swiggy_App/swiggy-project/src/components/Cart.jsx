import { useDispatch, useSelector } from "react-redux";
import { clearCart, decreaseQty, increaseQty } from "../store/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price * curr.qty, 0,);

  return (
    <div className="p-20 bg-gray-400 font-bold min-h-screen">
      <div className=" flex justify-between items-center pl-4 pr-4">
        <h1 className="text-2xl"> Your Cart </h1>
        <button onClick={()=> dispatch(clearCart())}
                className="bg-orange-600 p-2 rounded-2xl cursor-pointer text-white"
        >Clear Cart</button>
      </div>
      <div className=" p-4 ">
        {cartItems && cartItems.map((i) => (
          <div key={i.id} className=" flex justify-between items-center m-4 p-2 bg-red-200 rounded-2xl shadow-lg shadow-amber-600">
            <div >
              <h2>{i.name}</h2>
              <p className="text-gray-700">Price: Rs <span>{i.price}</span></p>
            </div>
            <div className="">
              <span onClick={()=> dispatch(increaseQty(i))}
                    className="cursor-pointer bg-green-400 text-green-800 px-3 py-1 rounded"
              >+</span>

              <span className="text-gray-600 p-2">{i.qty || 1}</span>

              <span onClick={()=> dispatch(decreaseQty(i))}
                    className="cursor-pointer bg-red-400 text-red-800 px-3 py-1 rounded"
              >-</span>
            </div>
          </div>  
        ))}
        <div className="text-2xl text-gray-800 text-center border-t-2 p-2 ">
          <p>Total-Price: Rs <span className="text-red-800">{totalPrice}</span></p>
        </div>
      </div>
    </div>
  );
};

export default Cart;