import React from "react"
import ReactDOM from "react-dom"
import App from "./routes"

// preparing the store
import { configureStore } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import cartReducer from "./components/features/cartSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
