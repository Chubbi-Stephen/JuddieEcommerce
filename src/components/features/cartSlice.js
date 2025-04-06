// import { createSlice } from "@reduxjs/toolkit"
// import { toast } from "react-toastify"

// const initialState = {
//   cartItems: localStorage.getItem("cartItems")
//     ? JSON.parse(localStorage.getItem("cartItems"))
//     : [],
//   cartTotalQuantity: 0,
//   cartTotalAmount: 0,
// }

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart(state, action) {
//       const itemIndex = state.cartItems.findIndex(
//         (item) => item._id === action.payload._id
//       )
//       if (itemIndex >= 0) {
//         state.cartItems[itemIndex].cartQuantity += 1
//         toast.info(`Increased ${state.cartItems[itemIndex].title} quantity`, {
//           position: "bottom-left",
//         })
//       } else {
//         const tempProduct = { ...action.payload, cartQuantity: 1 }
//         state.cartItems.push(tempProduct)
//         toast.success(`${action.payload.title} added to cart`, {
//           position: "bottom-left",
//         })
//       }

//       localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
//     },
//     removeFromCart(state, action) {
//       const nextCartItems = state.cartItems.filter(
//         (cartItem) => cartItem._id !== action.payload._id
//       )

//       state.cartItems = nextCartItems
//       localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
//       toast.error(`${action.payload.title} removed from cart`, {
//         position: "bottom-left",
//       })
//     },
//     decreaseCart(state, action) {
//       const itemIndex = state.cartItems.findIndex(
//         (cartItem) => cartItem._id === action.payload._id
//       )

//       if (state.cartItems[itemIndex].cartQuantity > 1) {
//         state.cartItems[itemIndex].cartQuantity -= 1

//         toast.info(`Decreased ${action.payload.title} cart quantity`, {
//           position: "bottom-left",
//         })
//       } else if (state.cartItems[itemIndex].cartQuantity === 1) {
//         const nextCartItems = state.cartItems.filter(
//           (cartItem) => cartItem._id !== action.payload._id
//         )

//         state.cartItems = nextCartItems
//         toast.error(`${action.payload.title} removed from cart`, {
//           position: "bottom-left",
//         })
//       }
//       localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
//     },
//     clearCart(state, action) {
//       state.cartItems = []
//       toast.error(`Cart cleared`, {
//         position: "bottom-left",
//       })
//       localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
//     },
//     getTotals(state, action) {
//       let { total, quantity } = state.cartItems.reduce(
//         (cartTotal, cartItem) => {
//           const { price, cartQuantity } = cartItem
//           const itemTotal = price * cartQuantity

//           cartTotal.total += itemTotal
//           cartTotal.quantity += cartQuantity

//           return cartTotal
//         },
//         {
//           total: 0,
//           quantity: 0,
//         }
//       )

//       state.cartTotalQuantity = quantity
//       state.cartTotalAmount = total
//     },
//   },
// })

// export const { addToCart, removeFromCart, decreaseCart, clearCart, getTotals } =
//   cartSlice.actions

// export default cartSlice.reducer


// import { createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-toastify"


// const initialState = {
//   cartItems: [],
//   cartTotalQuantity: 0,
//   cartTotalAmount: 0,
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart(state, action) {
//       const itemIndex = state.cartItems.findIndex(
//         (item) => item._id === action.payload._id
//       );

    
//       if (itemIndex >= 0) {
//         // If the item already exists, increase its quantity
//         state.cartItems[itemIndex].cartQuantity += 1;
//         toast.info(`Increased ${state.cartItems[itemIndex].title} quantity`, {
//           position: "bottom-left",
//         });
//       } else {
//         // If the item doesn't exist, add it to the cart
//         const tempProduct = { ...action.payload, cartQuantity: 1 };
//         state.cartItems.push(tempProduct);
//         toast.success(`${action.payload.title} added to cart`, {
//           position: "bottom-left",
//         });

//       }
    
//       // Save the updated cart to localStorage
//       localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
//     },
//     removeFromCart(state, action) {
//       state.cartItems = state.cartItems.filter(
//         (item) => item._id !== action.payload._id
//       );
//     },
//     decreaseCart(state, action) {
//       const itemIndex = state.cartItems.findIndex(
//         (item) => item._id === action.payload._id
//       );

//       if (itemIndex >= 0) {
//         if (state.cartItems[itemIndex].cartQuantity > 1) {
//           state.cartItems[itemIndex].cartQuantity -= 1;
//         } else {
//           state.cartItems = state.cartItems.filter(
//             (item) => item._id !== action.payload._id
//           );
//         }
//       }

      
//       localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
//       toast.info(`Decreased ${action.payload.title} cart quantity`, {
//         position: "bottom-left",
//       });
//       toast.error(`${action.payload.title} removed from cart`, {
//         position: "bottom-left",
//       });
//     },
//     clearCart(state) {
//       state.cartItems = [];
//       toast.error(`Cart cleared`, {
//                 position: "bottom-left",
//               })
//               localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
//     },
//     getTotals(state) {
//       let { total, quantity } = state.cartItems.reduce(
//         (cartTotal, cartItem) => {
//           const { price, cartQuantity } = cartItem;
//           const itemTotal = price * cartQuantity;

//           cartTotal.total += itemTotal;
//           cartTotal.quantity += cartQuantity;

//           return cartTotal;
//         },
//         {
//           total: 0,
//           quantity: 0,
//         }
//       );

//       state.cartTotalQuantity = quantity;
//       state.cartTotalAmount = total;
//     },
//   },
// });

// export const {
//   addToCart,
//   removeFromCart,
//   decreaseCart,
//   clearCart,
//   getTotals,
// } = cartSlice.actions;

// export default cartSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Add to Cart
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        // If the item already exists, increase its quantity
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(`Increased ${state.cartItems[itemIndex].title} quantity`, {
          position: "bottom-left",
        });
      } else {
        // If the item doesn't exist, add it to the cart
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success(`${action.payload.title} added to cart`, {
          position: "bottom-left",
        });
      }

      // Save the updated cart to localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // Remove from Cart
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );

      state.cartItems = nextCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.error(`${action.payload.title} removed from cart`, {
        position: "bottom-left",
      });
    },

    // Decrease Quantity
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        if (state.cartItems[itemIndex].cartQuantity > 1) {
          state.cartItems[itemIndex].cartQuantity -= 1;
          toast.info(`Decreased ${action.payload.title} quantity`, {
            position: "bottom-left",
          });
        } else {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== action.payload.id
          );

          state.cartItems = nextCartItems;
          toast.error(`${action.payload.title} removed from cart`, {
            position: "bottom-left",
          });
        }
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // Clear Cart
    clearCart(state) {
      state.cartItems = [];
      toast.error(`Cart cleared`, {
        position: "bottom-left",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    // Calculate Totals
    getTotals(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseCart,
  clearCart,
  getTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
